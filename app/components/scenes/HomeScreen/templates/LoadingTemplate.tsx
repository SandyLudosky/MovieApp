import React from "react";
import { View, StyleSheet } from 'react-native'
import Styles from '../../../../common/styles/index'
import { Loader } from '../../../molecules'

function LoadingTemplate() {
  return( <View style={Styles.container}>
            <View style={Styles.content}>
              <Loader style={Styles.loader}/>
            </View>
          </View>)
}
export default LoadingTemplate