import React, { Component } from 'react';
import { WebView } from 'react-native-webview'
import Styles from '../../../../common/styles/index'
import { Constants } from '../../../../config/constants'

export const IMDBWebview = (props: any) => { 
    const { movie, onLoadEnd } = props
    return(<WebView  source={{uri:`${Constants.IMDB_BASE_URL}/${movie.imdb_id}`}}
    scalesPageToFit={true}
    scrollEnabled={true}
    javaScriptEnabled={true}
    automaticallyAdjustContentInsets={true}
    onLoadEnd={() =>  onLoadEnd} /> )
}