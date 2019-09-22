import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';

interface IStarRating {
  size?: number;
  rating?: number;
  stars?: number;
}
export function StarRating({size = 30, rating = 0, stars = 5}: IStarRating) {
  const _stars = Array.apply(null, Array(5));
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {_stars.map((_, index) => (
        <Icon
          key={`${index}`}
          name="star"
          size={(size / stars) * 3.5}
          color={rating >= index + 1 ? 'rgba(0, 0, 0, 0.3)' : 'white'}
        />
      ))}
    </View>
  );
}