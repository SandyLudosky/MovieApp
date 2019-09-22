import React from "react";
import { ScrollableList } from '../../../organisms'
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'

export const MoviesList = (props: { movies: any; isFetching: any; search: any; text: string, onPress: any; })  => {
  const { movies, isFetching, text, onPress } = props
  const searchResultsAvailable = movies != null && movies.length > 0 
  if (!isFetching) {
      return searchResultsAvailable ? <ScrollableList {...props} onPress={onPress} /> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
};
