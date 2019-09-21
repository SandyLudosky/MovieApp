import React, { FunctionComponent } from "react";
import { View } from 'react-native'
import { IMovie } from '../../../models/movie'
import { MovieItem } from "./MovieItem";

interface MoviesProps {
  movies: IMovie[];
  onPress: (movie: IMovie) => void;
}

export const MoviesList: FunctionComponent<MoviesProps> = ({ movies, onPress }) => (
  <View>
    {movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} onPress={onPress}/>
    ))}
  </View>
);
