import React, { Component, Fragment} from 'react';
import { SearchBar } from 'react-native-elements';
import { IMovie } from '../../../models/movie'
import { MoviesList } from './MoviesList'
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
    movies: IMovie[],
    isLoading: boolean
}

class HomeScreen extends Component<NavigationProps, State> {
    state = {
      search: '', 
      movies: [], 
      isLoading: true
    }
    public static navigationOptions = {
      title: 'HomePage',
    };
    onPress = (movie: IMovie) => {
      this.props.navigation.navigate('Movie', {movie})
      console.log('navigate to movie ' + movie.title)
    }
    onTextChange = (input: string) => {
        this.setState({ search : input})
        this.fetch(input)
    }
    fetch = (input: string) => {
      fetch('https://api.themoviedb.org/3/search/movie?api_key=da2a25f95b10f3083241d558d0d47ac8&query=' + input)
      .then(response => {
        if (!response.ok) { return false }
        return response.json()
      })
      .then(data => {
        console.log(data.results)
        this.setState({ movies: data.results})
      })
      .catch(e => {
        console.log(e)
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
              <MoviesList movies={this.state.movies} onPress={this.onPress}/>
            </SafeAreaView>
          </Fragment>
        )
      }
}
export default HomeScreen