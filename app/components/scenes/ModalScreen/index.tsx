import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { IMovie } from '../../../models/movie'
import { View, Alert, StyleSheet } from 'react-native';
import {WebView } from 'react-native-webview'
import { CustomButton } from '../../atoms'
import { Loader } from '../../molecules'
import Styles from '../../../common/styles/index'
import { Constants } from '../../../config/constants'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface Props {
  movie: IMovie
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
   isReady: boolean
}
class ModalScreen extends Component<Props, State> {
    constructor(props: any) {
      super(props)
      this.state = {
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
        const params = this.props.navigation.state.params as any, movie = params.movie
        return(
            <View style={styles.container}>
             <WebView  source={{uri:`${Constants.IMDB_BASE_URL}${movie.imdb_id}`}}
                       scalesPageToFit={true}
                       scrollEnabled={true}
                       javaScriptEnabled={true}
                       automaticallyAdjustContentInsets={true}
                       onLoadEnd={() => this.setState({isReady: true}) } />
              <View>
            </View>

            <View style={[Styles.container, isReady ? styles.hidden :  styles.visible]}>
              <View style={Styles.content}>
                <Loader style={Styles.loader}/>        
              </View>
            </View> 
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  hidden: {
    display: 'none'
  },
  visible: {
    display: 'flex'
  },
  backBtn: {
   position: 'absolute',
   top: 20, 
   left: 20,   
   width: 100
  }
});
export default ModalScreen