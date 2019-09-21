import React, { Component } from 'react';
import { Text } from 'react-native'
import { IMovie } from '../../../models/movie'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

export interface IMovieProps {
    movie: IMovie; 
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
    movie: IMovie
}

class MovieScreen extends Component<IMovieProps, State>  { 
    constructor(props: IMovieProps) {
        super(props)
        this.state = {
            movie: props.movie
        }
    }
 
    render() {
        return(<Text>This is the Movie Screen {this.state.movie.title}</Text>)
    }
}
export default MovieScreen
