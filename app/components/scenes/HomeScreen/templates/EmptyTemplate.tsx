import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet} from 'react-native'
import {TextEmpty } from '../../../../common/styles/customElements'
interface Props {
  text: string;
}
const EmptyTemplate: FunctionComponent<Props> = ({text}) => (
  <View style={styles.container}>
     <View style={styles.content}>
          <TextEmpty>{ text }</TextEmpty>
      </View>
  </View>
);

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
  }  
})
export default EmptyTemplate