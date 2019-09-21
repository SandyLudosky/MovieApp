import React, { FunctionComponent } from "react";
import { Text, View } from 'react-native'

interface Props {
  search: string;
}

export const EmptyTemplate: FunctionComponent<Props> = ({search}) => (
  <View>
    <Text>No Results for this { search }</Text>
  </View>
);
