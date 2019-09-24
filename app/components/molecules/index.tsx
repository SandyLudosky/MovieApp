import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { IMovie } from '../../models/movie'
import { StarRating } from './StartRating'
import { SearchComponent } from './SearchComponent'
//reusable element to display movieItem in a scrollable list
const Cell = (props: any) => {
    const { onPress, item, children, style } = props
    const onClick = (movie: IMovie) => {
        //vérifier route . pas hardcodé
        onPress(movie)
    }
    return (
        <TouchableOpacity onPress={() => onClick(item)} >              
            <View style={style}>{children}</View>
        </TouchableOpacity>)
} 
//reusable element to organise content in a row
const Row = (props: any) => {
    const { style, children} = props 
    return(<View style={style}>{children}</View>)
}
export {
    Cell, 
    Row, 
    StarRating, 
    SearchComponent
}