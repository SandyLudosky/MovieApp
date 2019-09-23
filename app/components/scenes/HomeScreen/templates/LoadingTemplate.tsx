import React from "react";
import { View, ActivityIndicator } from 'react-native'
import Styles from '../../../../common/styles/index'

function LoadingTemplate() {
  return( <View style={Styles.container}>
            <View style={Styles.content}>
              <ActivityIndicator />
            </View>
          </View>)
}
export default LoadingTemplate