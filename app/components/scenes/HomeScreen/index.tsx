import React, { Component, Fragment} from 'react';
import { SearchBar } from 'react-native-elements';
import { IMovie } from '../../../models/movie'
import { MoviesList } from './templates/MoviesList'
import * as API from '../../../services/API'
import { Query } from '../../../services/API'
import { EndPoints, Languages } from '../../../services/config';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    search: string,
    text: string,
    movies: IMovie[],
    isLoading: boolean
}

class HomeScreen extends Component<NavigationProps, State> {
    state = {
      search: '', 
      text: '',
      movies: [], 
      isLoading: false
    }
    public static navigationOptions = {
      title: 'HomePage',
    };
    onPress = (movie: IMovie) => {
      this.props.navigation.navigate('Movie', {movie})
      console.log('navigate to movie ' + movie.title)
    }
    onTextChange = (input: string) => {
      this.setState({ search: input, isLoading: true}, () => {
        const request = new Query(EndPoints.Search.Movie, '', { query: input, language: Languages.english })
        this.fetch(request)
      })
    }
    fetch = (request: Query) => {
      API.get(request).then(data => {
        const results = data as any
        const text = results.results.length == 0 ? `No Results for "${this.state.search}"` : ''
        this.setState({ isLoading: false, movies: results.results, text: text});
      })
    }
    render() {
        const { search } = this.state
        return (
          <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <SearchBar placeholder="Search Movie..." value={search} 
                        lightTheme={true} round={true}
                        onChangeText={this.onTextChange} />
              <MoviesList {...this.state} onPress={this.onPress}/>
            </SafeAreaView>
          </Fragment>
        )
      }
}
export default HomeScreen