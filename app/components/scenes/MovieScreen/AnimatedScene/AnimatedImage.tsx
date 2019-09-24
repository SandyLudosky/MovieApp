import React from 'react';
import { Constants } from '../../../../config/constants'
import {
    Animated,
    StyleSheet,
  } from 'react-native';

  export const AnimatedImage = (props: any) => {
      const { show, fadeAnim, scaleAnim, movie, height } = props
      const imageURI = movie.poster_path != null ? `${Constants.IMAGE_BASE_URL}${movie.poster_path}` : Constants.PLACEHOLDER_POSTER
      return(<Animated.Image
        onLoadEnd={show}
        source={{ uri: imageURI,}}
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: fadeAnim,
            overflow: 'hidden',
            transform: [
              {
                scaleX: scaleAnim.interpolate({
                  inputRange: [1, height],
                  outputRange: [1.5, 1],
                  extrapolate: 'clamp',
                }),
              },
              {
                scaleY: scaleAnim.interpolate({
                  inputRange: [1, height],
                  outputRange: [1.5, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      />)
  }