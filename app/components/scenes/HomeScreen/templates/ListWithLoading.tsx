import React, { FunctionComponent } from "react";
import LoadingTemplate from './LoadingTemplate'
import EmptyTemplate from './EmptyTemplate'

/* HOC to handle conditional rendering on homepage */
function ListWithLoading(Component: FunctionComponent) {
  return function WihLoadingComponent({ ...props }: any) {
    const { movies, isFetching, text, onPress } = props
    if (!isFetching) {
      return  movies.length != 0  ? <Component {...props} onPress={onPress}/> : <EmptyTemplate text={text}/>
  }  else {
    return <LoadingTemplate />;
  }
  }
}
export default ListWithLoading;