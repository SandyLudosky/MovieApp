import React, { FunctionComponent } from "react";
import { View } from 'react-native'
import { IMovie } from '../../../models/movie'
import { 
  ListTemplate,
  LoadingTemplate, 
  EmptyTemplate
} from '../../templates/index'

interface MoviesProps {
  movies: IMovie[];
  onPress: (movie: IMovie) => void;
}

export const MoviesView: FunctionComponent<MoviesProps> = ({ movies, onPress }) => (
  <ListTemplate movies={movies} onPress={onPress} />
);
