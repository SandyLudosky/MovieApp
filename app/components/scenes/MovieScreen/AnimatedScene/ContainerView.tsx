import React from 'react';
import {
    View,
    Alert
  } from 'react-native';
  import {StarRating} from '../../../molecules/StartRating'
  import {Headline, Button, Subheading} from 'react-native-paper';
  import styled from 'styled-components/native';
  import color from 'color';

  const ContentContainer = styled.View<{color: string}>`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;s
`;  


  export const ContainerView = (props: any) => {
      const { color, movie, height, background } = props
      return( <ContentContainer style={{minHeight: height * 0.6, backgroundColor: '#000'}} >
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
            color: color('#fff')
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
            style={{backgroundColor: '#f1c40f'}}
            mode="contained"
            onPress={() => Alert.alert('Ups!', 'Not supperted yet')}>
            Bookmark
          </Button>
          <View style={{width: 8}}></View>
          <Button
            style={{backgroundColor: '#e74c3c'}}
            mode="contained"
            onPress={() => Alert.alert('Ups!', 'Not supperted yet')}>
            Buy Tickets
          </Button>
        </View>
        <View style={{height: 16}} />
        <Subheading
          style={{
            color: color('#fff')
              .alpha(1)
              .rgb()
              .string(),
          }}>
          {movie.overview}
        </Subheading>
      </ContentContainer>)
  }