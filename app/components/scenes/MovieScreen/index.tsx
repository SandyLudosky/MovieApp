import React, { Component } from 'react';
import { EndPoints } from '../../../services/config';
import * as API from '../../../services/API'
import { Query } from '../../../services/API'
import { IMovie } from '../../../models/movie'
import { View, Text } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import { MovieView } from '../../organisms/index'

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
    movie: IMovie
}
class MoviePage extends Component<Props, State>  {
    state = {
        movie: {} as IMovie
    }
    componentDidMount() {
        const movie = this.props.navigation.state.params.movie
        const request = new Query(EndPoints.Find.Movie, movie.id, {language: 'en-US' })
        this.fetch(request)
    }
    fetch = (request: Query) => {
        API.get(request).then(data => {
            this.setState({ movie: data as IMovie });
        })
    }
    render() {
        return (
            <MovieView movie={this.state.movie} />
        )
    }
} 
export default MoviePage