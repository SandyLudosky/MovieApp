import React, { Component } from 'react';
import { Text } from 'react-native'
import { IMovie } from '../../../models/movie'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  

interface IMovieProps {
    movie: IMovie; 
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {}

class MovieScreen extends Component<IMovieProps, State>  { 
    constructor(props: Readonly<IMovieProps>) {
        super(props)
    }
  
    render() {
        const { navigation } = this.props
        const movie = navigation.state.params.movie
        return(<Text>This is the Movie Screen {movie.title}</Text>)
    }
}
export default MovieScreen
