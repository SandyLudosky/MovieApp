import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Alert } from 'react-native';
import { EndPoint } from '../../../services/api/config';
import * as API from '../../../services/api/API'
import { Query } from '../../../services/api/API'
import { IMovie } from '../../../models/movie'
import { MovieScene } from './MovieScene'
import { AnimatedScene } from './AnimatedScene'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
  } from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
    movie: IMovie
}
class MovieScreen extends Component<Props, State>  {
    static navigationOptions = ({ navigation }:any) => ({
        title: `${navigation.state.params.movie.title}`,
    });
    state = {
        movie: {} as IMovie
    }
    onPress = (movie: IMovie) => {
        this.props.navigation.navigate('WebView', {movie})
    }
    componentDidMount() {
        const params = this.props.navigation.state.params as any, movie = params.movie
        const request = new Query(EndPoint.Find.Movie, movie.id, {language: 'en-US' })
        this.fetch(request)
    }
    fetch = (request: Query) => {
        NetInfo.isConnected.fetch().done((isConnected: boolean) => {
            if (isConnected) {
                API.get(request).then(data => {
                    this.setState({ movie: data as IMovie });
                }).catch(e => { console.log(e) })
            } else {
               Alert.alert('Network Failure - Please try again later')
            }
          });  
    }
    render() {
        return (<AnimatedScene onPress={this.onPress} movie={this.state.movie}/>)
    }
} 
export default MovieScreen