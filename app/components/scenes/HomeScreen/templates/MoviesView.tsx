import React from "react";
import { 
  ListTemplate,
  LoadingTemplate, 
  EmptyTemplate
} from './index'

export const MoviesView = (props: { movies: any; isLoading: any; search: any; text: string, onPress: any; })  => {
  const { movies, isLoading, text, onPress } = props
  const searchResultsAvailable = movies != null && movies.length > 0 
  if (!isLoading) {
      return searchResultsAvailable ? <ListTemplate movies={movies} onPress={onPress}/> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
};
