import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { IMovie } from '../../../models/movie'
import { View, Alert, StyleSheet } from 'react-native';
import {WebView } from 'react-native-webview'
import { CustomButton } from '../../atoms'
import { Loader } from '../../molecules'
import Styles from '../../../common/styles/index'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface Props {
  id: number
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
   movie: IMovie
   isReady: boolean
}

class ModalScreen extends Component<Props, State> {
    constructor(props: any) {
      super(props)
      this.state = {
        movie: {} as IMovie,
        isReady: false
      }
    }
    componentDidMount() {
      NetInfo.isConnected.fetch().done((isConnected: boolean) => {
        if (!isConnected) {
          Alert.alert('Network Failure - Please try again later')
        }
      }); 
    }
    render() {
        const { isReady } = this.state
        return(
          <View>
            <View style={Styles.container}>
              <View style={Styles.content}>
              {!isReady ? <Loader style={Styles.loader}/> : null }        
              </View>
            </View>
            <WebView  source={{uri: 'https://www.imdb.com/title/tt4154796/?ref_=nv_sr_1?ref_=nv_sr_1'}} style={styles.video} 
                      onLoadEnd={() => this.setState({isReady: true}) } />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  video: {
    marginTop: 20,
    flexDirection: 'column',

    width: 400,
    height: 2000,
    flex: 1
  }, 
  backBtn: {
   position: 'absolute',
   top: 20, 
   left: 20,   
   width: 100
  }
});
export default ModalScreen