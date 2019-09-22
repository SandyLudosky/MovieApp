import React, { FunctionComponent, useState } from "react";
import { Text, View, Image, StyleSheet } from 'react-native'


function LoadingTemplate() {
  return( <View style={styles.container}>
            <View style={styles.content}>
            <Image source={{ uri : 'https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif'}}  style={styles.loader}/>
            </View>
          </View>)
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: 'powderblue',
    alignItems: 'stretch'
  },
  content: {
    flex: 1,
    width: 200, 
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width:150, 
    height: 150
  }
  
})

export default LoadingTemplate