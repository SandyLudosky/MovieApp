import React, { FunctionComponent } from "react";
import { Text, View } from 'react-native'

interface Props {
  search: string;
}

export const EmptyTemplate: FunctionComponent<Props> = ({search}) => (
  <View>
    <Text>{ search }</Text>
  </View>
);
