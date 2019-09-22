import React, { FunctionComponent } from "react";
import { View, StyleSheet} from 'react-native'
import {TextEmpty } from '../../../../common/styles/customElements'
import Styles from '../../../../common/styles/index'

interface Props {
  text: string;
}
const EmptyTemplate: FunctionComponent<Props> = ({text}) => (
  <View style={Styles.container}>
     <View style={Styles.content}>
          <TextEmpty>{ text }</TextEmpty>
      </View>
  </View>
);
export default EmptyTemplate