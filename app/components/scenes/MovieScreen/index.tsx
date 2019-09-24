import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Alert } from 'react-native';
import { API } from '../../../services/index'
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
    isConnected: boolean
}
class MovieScreen extends Component<Props, State>  {
    static navigationOptions = ({ navigation }: any) => ({
        title: `${navigation.state.params.movie.title}`,
    });
    state = {
        movie: {} as IMovie,
        isConnected: false
    }
    componentDidMount() {
        //checking connectivity 
        NetInfo.isConnected.fetch().done((isConnected: boolean) => {
            this.setState({ isConnected: isConnected }, () => {
                const params = this.props.navigation.state.params as any, movie = params.movie
                this.state.isConnected ? this.fetch(movie.id) : Alert.alert('Network Failure - Please try again later')
            })
        });
    }
    onPress = (movie: IMovie) => {
        this.props.navigation.navigate('WebView', { movie })
    }
    fetch = (id: string) => {
        if (this.state.isConnected) {
            API.fetchMovie(id).then(movie => {
                this.setState({ movie: movie as IMovie });
            }).catch(e => { console.log(e) })
        } else { Alert.alert('Network Failure - Please try again later')}
    }
    render() {
        return (<AnimatedScene onPress={this.onPress} movie={this.state.movie} />)
    }
}
export default MovieScreen