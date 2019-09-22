import React, { ReactNode, ReactElement, FunctionComponent } from "react";
import { ScrollableList } from '../../../organisms'
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'
import { JSXElement } from "@babel/types";

function ListWithLoading<Component>(Component: FunctionComponent) {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    const { movies, isFetching, text, onPress } = props
    const searchResultsAvailable = movies != null && movies.length > 0 
    if (!isFetching) {
      return searchResultsAvailable ? <Component {...props} onPress={onPress}/> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
  }
}
export default ListWithLoading;