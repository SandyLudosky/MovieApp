import React, { FunctionComponent } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Cell, Row } from '../molecules'
import { Img } from '../atoms'
import { TextHeading2, TextBold, TextDescription } from '../../common/styles/customElements'
import { IMovie } from '../../models/movie'
import Styles from '../../common/styles'

export interface MoviesProps {
    movie: IMovie;
}

const Poster: FunctionComponent<MoviesProps> = ({ movie }) => (
    <View style={{ flex: 1, alignItems: 'stretch' }}>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <Img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} style={Styles.MovieList.cover} />
        </View>
    </View>
)

const Content: FunctionComponent<MoviesProps> = ({ movie }) => (
    <Row>
        <TextHeading2 style={{ paddingBottom: 3 }}>{movie.title}</TextHeading2>
        <Row>
            <Text style={styles.rating}><TextBold>rating: </TextBold>{movie.vote_average != 0 ? movie.vote_average : 'N/A'}</Text>
            <Text style={styles.release}><TextBold>release: </TextBold>{movie.release_date}</Text>
        </Row>

        <Row style={styles.description}>
            {movie.overview == null ?
                <TextDescription>No Description Available</TextDescription> :
                <Text>{movie.overview}</Text>
            }
        </Row>
    </Row>
)

export const MovieView: FunctionComponent<MoviesProps> = ({ movie }) => (
    <View style={{ flex: 1, alignItems: 'stretch' }}>
        <Poster movie={movie} />
        <ScrollView style={styles.scrollView}>
            <Cell style={styles.cell}>
                <Content movie={movie} />
            </Cell>
        </ScrollView>
    </View>
);



const styles = StyleSheet.create({
    scrollView: {
        flex: 4,
        backgroundColor: 'whitesmoke'
    },
    cell: {
        flex: 1,
        alignItems: 'stretch',
        padding: 30
    },
    rating: {
        flex: 1,
        fontSize: 16
    },
    release: {
        flex: 3,
        fontSize: 16
    },
    description: {
        flex: 4,
        marginTop: 20,
        color: '#333'
    }
});

export default MovieView 