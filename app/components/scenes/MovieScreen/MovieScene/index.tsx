import React, { FunctionComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Poster, Content } from './components'
import { Cell } from '../../../molecules'
import { IMovie } from '../../../../models/movie';

export interface MoviesProps {
  movie: IMovie;
}
export const MovieScene: FunctionComponent<MoviesProps> = ({ movie }) => (
  <View style={{ flex: 1, alignItems: 'stretch' }}>
        <Poster movie={movie} />
        <ScrollView style={styles.scrollView}>
            <Cell style={styles.cell}>
                <Content movie={movie} />
            </Cell>
        </ScrollView>
      </View>
)

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
