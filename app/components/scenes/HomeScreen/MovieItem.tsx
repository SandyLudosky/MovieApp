import React, { FunctionComponent, ReactNode } from "react";
import { View, Text, Button } from 'react-native'
import { IMovie } from '../../../models/movie'

interface MovieProps {
  movie: IMovie;
  onPress: (movie: IMovie) => void;
  children: ReactNode;
}

export const MovieItem: FunctionComponent<MovieProps> = ({ movie, onPress, children }) => {
  const onClick = () => {
    console.log('pressed' + movie.title)
    onPress(movie);
  };
  return (
        {children}
  );
};
