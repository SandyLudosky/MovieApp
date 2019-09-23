import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  Dimensions,
  Animated,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import color from 'color';
import {useNavigationParam} from 'react-navigation-hooks';
import { AnimatedImage } from './AnimatedImage'
import { ContainerView} from './ContainerView'

export function AnimatedScene({onPress}: any): JSX.Element {

  const movie = useNavigationParam('movie');
  const scroll = useRef<ScrollView>(null);
  const [scrolled, setScrolled] = useState(false);
  const {height} = Dimensions.get('screen');
  const backgroundColor = '#fff'
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(height));

  const show = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (scroll.current && !scrolled) {
        scroll.current.scrollTo({
          y: height * 0.5,
          animated: true,
        });
        setScrolled(true);
      }
    }, 200);
  });

  const background = color(backgroundColor)
    .darken(0.85)
    .rgb()
    .string();

  return (
    <View style={{flex: 1, backgroundColor: background}}>
      <View style={[StyleSheet.absoluteFillObject, {overflow: 'scroll'}]}>
        <AnimatedImage movie={movie} show={show} fadeAnim={fadeAnim} scaleAnim={scaleAnim} height={height} />
      </View>
      <ScrollView
        ref={scroll}
        bounces={false}
        bouncesZoom
        endFillColor={backgroundColor}
        style={{backgroundColor: 'rgba(0,0,0,0.01)'}}
        scrollEventThrottle={16}
        onScroll={event => { scaleAnim.setValue(height - event.nativeEvent.contentOffset.y); }}>
        <View style={{height: height}} />
        <ContainerView movie={movie} color={color} height={height} background={background} onPress={onPress}/>
      </ScrollView>
    </View>
  );
}