import React from 'react';
import { View, Image } from 'react-native';


export function Loader(props: any) {
    const { style } = props
    return (
        <View>
            <Image source={{ uri : 'https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif'}} style={style}/>
        </View>
    );
}