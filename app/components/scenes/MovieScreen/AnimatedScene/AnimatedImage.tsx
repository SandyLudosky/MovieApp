import React from 'react';
import {
    Animated,
    StyleSheet,
  } from 'react-native';

  export const AnimatedImage = (props: any) => {
      const { show, fadeAnim, scaleAnim, movie, height } = props
      return(<Animated.Image
        onLoadEnd={show}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
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