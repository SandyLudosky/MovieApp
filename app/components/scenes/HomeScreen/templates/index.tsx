import React from "react";
import ListTemplate  from './ListTemplate'
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'

export const MoviesList = (props: { movies: any; isLoading: any; search: any; text: string, onPress: any; })  => {
  const { movies, isLoading, text, onPress } = props
  const searchResultsAvailable = movies != null && movies.length > 0 
  if (!isLoading) {
      return searchResultsAvailable ? <ListTemplate movies={movies} onPress={onPress}/> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
};
