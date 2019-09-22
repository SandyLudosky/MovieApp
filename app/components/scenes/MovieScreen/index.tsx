import React, { Component } from 'react';
import { EndPoint } from '../../../services/config';
import * as API from '../../../services/API'
import { Query } from '../../../services/API'
import { IMovie } from '../../../models/movie'
import { MovieScene } from './MovieScene'
import { AnimatedScene } from './AnimatedScene'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';


export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
    movie: IMovie
}
class MovieScreen extends Component<Props, State>  {
    state = {
        movie: {} as IMovie
    }
    componentDidMount() {
        const params = this.props.navigation.state.params as any, movie = params.movie
        const request = new Query(EndPoint.Find.Movie, movie.id, {language: 'en-US' })
        this.fetch(request)
    }
    fetch = (request: Query) => {
        API.get(request).then(data => {
            this.setState({ movie: data as IMovie });
        }).catch(e => { console.log(e) })
    }
    render() {
        return (<AnimatedScene movie={this.state.movie}/>)
    }
} 
export default MovieScreen