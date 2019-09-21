import React, { FunctionComponent } from "react";
import { Text, View } from 'react-native'
interface Props {
  text: string;
}
export const EmptyTemplate: FunctionComponent<Props> = ({text}) => (
  <View>
    <Text>{ text }</Text>
  </View>
);
