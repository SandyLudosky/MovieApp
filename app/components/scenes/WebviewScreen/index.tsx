import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { IMovie } from '../../../models/movie'
import { View, Alert, StyleSheet } from 'react-native';
import { CustomButton } from '../../atoms'
import {
  IMDBWebview, 
  LoadingIndicator
} from './components/index'
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
class WebviewScreen extends Component<Props, State> {
    state = {
      isReady: false
    }
    componentDidMount() {
      NetInfo.isConnected.fetch().done((isConnected: boolean) => {
        if (!isConnected) {
          Alert.alert('Network Failure - Please try again later')
        }
      });  
    }
    onLoadEnd = () => {
      this.setState({isReady: true}) 
    }
    render() {
        const { isReady } = this.state
        const params = this.props.navigation.state.params as any, movie = params.movie
        return(
            <View style={styles.container}>
                <CustomButton.Back action={() => this.props.navigation.goBack()} text={'Back'} style={styles.backBtn} />
                <IMDBWebview movie={movie} onLoadEnd={this.onLoadEnd} /><View>
            </View>
              <LoadingIndicator isReady={isReady} />
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
  backBtn: {
   marginTop: 30, 
   marginLeft: 20,   
   width: 100
  }
});
export default WebviewScreen
