import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Img } from '../../../../atoms'
import { IMovie } from '../../../../../models/movie'
import Styles from '../../../../../common/styles/index'

export interface MoviesProps {
    movie: IMovie;
}
export const Poster: FunctionComponent<MoviesProps> = ({ movie }) => (
    <View style={{ flex: 1, alignItems: 'stretch' }}>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <Img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} style={Styles.App.cover} />
        </View>
    </View>
)