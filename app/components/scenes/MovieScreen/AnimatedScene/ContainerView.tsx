import React from 'react';
import {
    View,
    Alert,
    StyleSheet 
  } from 'react-native';
  import color from 'color';
  import {StarRating} from '../../../molecules/StartRating'
  import { CustomButton } from '../../../atoms'
  import {Button, Subheading} from 'react-native-paper';
  import { BoldHeadline } from '../../../../common/styles/customElements'
  import styled from 'styled-components/native';

  export const ContainerView = (props: any) => {
      const { color, movie, height } = props
      return( <ContentContainer style={{minHeight: height * 0.6, backgroundColor: '#000'}} >
        <View style={styles.view} />
        <BoldHeadline style={styles.headline}>{movie.title}</BoldHeadline>
        <StarRating rating={Math.round(movie.vote_average / 2)} />
        <View style={{height: 16}} />
        
        <View style={{flexDirection: 'row'}}>
          <CustomButton.Red style={styles.btn} action={() => Alert.alert('Ups!', 'Not supperted yet')} text={'Buy Tickets'} />
          <CustomButton.Yellow  style={null} action={() => Alert.alert('Ups!', 'Not supperted yet')} text={'Bookmark'} />
        </View>

        <View style={{height: 16}} />
        <Subheading style={styles.subheading}> {movie.overview} </Subheading>
      </ContentContainer>)
  }

  const ContentContainer = styled.View<{color: string}>`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;s
`;  

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginVertical: 8,
    width: 60,
    height: 5,
    borderRadius: 10,
  },
  btn: {
    marginRight: 10
  }, 
  headline: {
    color: color('#fff')
        .alpha(1)
        .rgb()
        .string(),
  }, 
  subheading: {
    color: color('#fff')
    .alpha(1)
    .rgb()
    .string()
  }
});