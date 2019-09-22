import React, { Component } from 'react';
import { EndPoint } from '../../../services/config';
import * as API from '../../../services/API'
import { Query } from '../../../services/API'
import { IMovie } from '../../../models/movie'
import { View, ScrollView, StyleSheet } from 'react-native';
import { Cell } from '../../molecules'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import { Poster, Content } from './components'

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
        return (
            <View style={{ flex: 1, alignItems: 'stretch' }}>
                <Poster movie={this.state.movie} />
                <ScrollView style={styles.scrollView}>
                    <Cell style={styles.cell}>
                        <Content movie={this.state.movie} />
                    </Cell>
                </ScrollView>
            </View>
        )
    }
} 

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

export default MovieScreen