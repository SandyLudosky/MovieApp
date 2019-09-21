import React, { FunctionComponent } from "react";
import { Text, Button } from 'react-native'
import { IMovie } from '../../../models/movie'

interface MovieProps {
  movie: IMovie;
  onPress: (movie: IMovie) => void;
}

export const MovieItem: FunctionComponent<MovieProps> = ({ movie, onPress }) => {
  const onClick = () => {
    console.log('pressed' + movie.title)
    onPress(movie);
  };
  return (
    <Text>{movie.title}<Button onPress={onClick} title="See Movie" />see</Text>
  );
};
