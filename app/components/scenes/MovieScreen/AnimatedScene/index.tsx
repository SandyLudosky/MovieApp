import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  Dimensions,
  Animated,
  View,
  Alert,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import {useTheme} from '../../../../common/styles/theme'
import styled from 'styled-components/native';
import {Headline, Button, Subheading} from 'react-native-paper';
import color from 'color';
import {useNavigationParam} from 'react-navigation-hooks';
import {StarRating} from '../../../molecules/StartRating'
import { AnimatedImage } from './AnimatedImage'
import { ContainerView} from './ContainerView'
const ContentContainer = styled.View<{color: string}>`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.color};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;s
`;

export function AnimatedScene() {
  const movie = useNavigationParam('movie');
  //const theme = withTheme();
  const scroll = useRef<ScrollView>(null);
  const [scrolled, setScrolled] = useState(false);
  const {height} = Dimensions.get('screen');
  const backgroundColor = '#000'
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
        onScroll={event => {
          // scale(height - event.nativeEvent.contentOffset.y);
          scaleAnim.setValue(height - event.nativeEvent.contentOffset.y);
        }}>
        <View style={{height: height}} />
        <ContainerView movie={movie} color={color} height={height} background={background} />
      </ScrollView>
    </View>
  );
}