import React, { FunctionComponent } from "react";
import { View } from 'react-native'
import { IMovie } from '../../../../models/movie'
import { ScrollableList } from '../../../organisms/index'

interface MoviesProps {
  movies: IMovie[];
  onPress: (movie: IMovie) => void;
}

export const ListTemplate: FunctionComponent<MoviesProps> = ({ movies, onPress }) => (
  <View>
     <ScrollableList results={movies} onPress={onPress} />
  </View>
);

export default ListTemplate