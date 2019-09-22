import React from 'react';
import { TextDescription } from '../../common/styles/customElements'
import * as helpers from '../../common/utils/helpers'
import { Button } from 'react-native-paper';
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

/* Component namespacing */
const Accessory = ({ children}) => {children};
Accessory.ChevronIcon = ({style}) => <View style={style}><Icon type='evilicon' name='chevron-right'/></View>;
Accessory.InfoCirlcleIcon = ({style}) => <View style={style}><Icon type='font-awesome' name='info-circle'/></View>;

const CustomButton = ({ children}) => {children}
CustomButton.Red = ({action, text, style}) => 
    <Button style={[{backgroundColor: '#f1c40f'}, style]} mode="contained" title={text}
             onPress={action}> {text} </Button>
CustomButton.Yellow = ({action, text, style}) => 
    <Button style={[{backgroundColor: '#e74c3c'}, style]} mode="contained" title={text}
             onPress={action}> {text} </Button>

export {
   Img,
   TextTruncate,
   Accessory, 
   CustomButton
}