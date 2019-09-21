import React from 'react';
import { TextDescription } from '../../common/styles/customElements'
import * as helpers from '../../common/utils/helpers'
import { Icon } from 'react-native-elements'
import {
    View,
    Image
} from 'react-native';

const Img = (props) => {
    const { src, style } = props 
    return( <View style={style}><Image source={{ uri:src }} style={style}/></View>)
}
const TextTruncate = (props) => {
    const { text, characterLength } = props
    return <TextDescription>{helpers.truncate(text, characterLength)}</TextDescription>
}
const Accessory = ({ children}) => {children};
Accessory.ChevronIcon = ({style}) => <View style={style}><Icon type='evilicon' name='chevron-right'/></View>;

export {
   Img,
   TextTruncate,
   Accessory
}