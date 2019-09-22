import React, { FunctionComponent } from "react";
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'

function ListWithLoading(Component: FunctionComponent) {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    const { movies, isFetching, text, onPress } = props
    if (!isFetching) {
      return  movies.length != 0  ? <Component {...props} onPress={onPress}/> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
  }
}
export default ListWithLoading;