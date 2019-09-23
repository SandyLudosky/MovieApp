import React, { Component, Fragment} from 'react';
import NetInfo from "@react-native-community/netinfo";
import { IMovie } from '../../../models/movie'
import { ScrollableList } from '../../organisms'
import { SearchComponent } from '../../molecules'
import ListWithLoading from './templates/ListWithLoading'
import * as API from '../../../services/api/API'
import { Query } from '../../../services/api/API'
import { EndPoint, Languages } from '../../../services/api/config';
import {
    SafeAreaView,
    StatusBar,
    Alert,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

export interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    search: string,
    text: string,
    movies: IMovie[],
    isFetching: boolean
}

class HomeScreen extends Component<NavigationProps, State> {
    state = {
      search: '', 
      text: '',
      movies: [], 
      error: null,
      isFetching: false
    }
    public static navigationOptions = {
      title: 'HomePage',
    };
    onPress = (movie: IMovie) => {
      this.props.navigation.navigate('Movie', {movie})
    }
    onTextChange = (input: string) => {
      this.setState({ search: input, isFetching: true}, () => {
        const request = new Query(EndPoint.Search.Movie, '', { query: input, language: Languages.english })
        this.fetch(request)
      })
    }
    onCancel = () => { 
      this.setState({ isFetching: false, movies: []}) 
    }
    fetch = (request: Query) => {
      NetInfo.isConnected.fetch().done((isConnected: boolean) => {
        if (isConnected) {
          API.get(request).then(data => {
            const json = data as any, text = json.results.length == 0 ? `Sorry, No Results for "${this.state.search}" :(` : ''
            this.setState({ isFetching: false, movies: json.results, text: text});
          }).catch(e => { throw Error(e) })
        } else {
           Alert.alert('Network Failure - Please try again later')
        }
      });
    }

    render() {
        const { search } = this.state
        const MoviesList = ListWithLoading(ScrollableList);
        return (
          <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <SearchComponent onChange={this.onTextChange} search={search} searchCancel={this.onCancel}/>
              <MoviesList {...this.state} onPress={this.onPress} />
            </SafeAreaView>
          </Fragment>
        )
      }
}
export default HomeScreen