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
import {useTheme} from '../../../common/styles/theme'
import styled from 'styled-components/native';
import {Headline, Button, Subheading} from 'react-native-paper';
import color from 'color';
import {useNavigationParam} from 'react-navigation-hooks';
import {StarRating} from '../../molecules/StartRating'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { IMovie } from '../../../models/movie';

const ContentContainer = styled.View<{color: string}>`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.color};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;s
`;

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export function MovieScreen2() {
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
        <Animated.Image
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
        />
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
        <ContentContainer style={{minHeight: height * 0.6}} color={background}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'rgba(255,255,255,0.25)',
              marginVertical: 8,
              width: 60,
              height: 5,
              borderRadius: 10,
            }}></View>
          <Headline
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: color('#000')
                .alpha(1)
                .rgb()
                .string(),
            }}>
            {movie.title}
          </Headline>
          <StarRating rating={Math.round(movie.vote_average / 2)} />
          <View style={{height: 16}} />
          <View style={{flexDirection: 'row'}}>
            <Button
              style={{backgroundColor:'#000'}}
              mode="contained"
              onPress={() => Alert.alert('Ups!', 'Not supperted yet')}>
              Bookmark
            </Button>
            <View style={{width: 8}}></View>
            <Button
              style={{backgroundColor: '#000'}}
              mode="contained"
              onPress={() => Alert.alert('Ups!', 'Not supperted yet')}>
              Buy Tickets
            </Button>
          </View>
          <View style={{height: 16}} />
          <Subheading
            style={{
              color: color('#000')
                .alpha(1)
                .rgb()
                .string(),
            }}>
            {movie.overview}
          </Subheading>
        </ContentContainer>
      </ScrollView>
    </View>
  );
}