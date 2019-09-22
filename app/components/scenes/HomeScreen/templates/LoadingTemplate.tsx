import React from "react";
import { View, Image, StyleSheet } from 'react-native'
import Styles from '../../../../common/styles/index'

function LoadingTemplate() {
  return( <View style={Styles.container}>
            <View style={Styles.content}>
            <Image source={{ uri : 'https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif'}} style={styles.loader}/>
            </View>
          </View>)
}
const styles = StyleSheet.create({
  loader: {
    width:150, 
    height: 150
  }
})
export default LoadingTemplate