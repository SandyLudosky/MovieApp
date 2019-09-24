import React from 'react';
import Styles from '../../../../common/styles/index'
import { styles } from './style'
import {
    View, 
    ActivityIndicator
  } from 'react-native';

export const LoadingIndicator = (props: any) => { 
    const { isReady } = props
    return(<View style={[Styles.container, isReady ? styles.hidden : styles.visible]}>
        <View style={Styles.content}>
          <ActivityIndicator />
        </View>
      </View> )
}