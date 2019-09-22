import React from "react";
import { ScrollableList } from '../../../organisms'
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'

export const MoviesList = (props: { movies: any; isLoading: any; search: any; text: string, onPress: any; })  => {
  const { movies, isLoading, text, onPress } = props
  const searchResultsAvailable = movies != null && movies.length > 0 
  if (!isLoading) {
      return searchResultsAvailable ? <ScrollableList results={movies} onPress={onPress} /> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
};
