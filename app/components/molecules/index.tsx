import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from '../../styles';

//reusable element to display movieItem in a scrollable list
const Cell = (props: any) => {
    const { onPress, item, children, style } = props
    const onClick = (id: number) => {
        //vérifier route . pas hardcodé
        onPress(id)
        //navigation.navigate('Movie', { id });
    }
    return (
        <TouchableOpacity onPress={() => onClick(item.id)} >              
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
    Row
}