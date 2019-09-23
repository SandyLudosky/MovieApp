import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import color from 'color';
import { StarRating } from '../../../molecules/'
import { CustomButton } from '../../../atoms'
import { Subheading } from 'react-native-paper';
import { BoldHeadline, ContentContainer } from '../../../../common/styles/customElements'

export const ContainerView = (props: any) => {
  const { movie, height, onPress } = props
  return (<ContentContainer style={{ minHeight: height * 0.6, backgroundColor: '#fff' }} >
            <View style={styles.view} />
            <BoldHeadline style={styles.headline}>{movie.title}</BoldHeadline>
            <StarRating rating={Math.round(movie.vote_average / 2)} />
            <View style={{ height: 16 }} />

            <View style={{ flexDirection: 'row-reverse' }}>
              <CustomButton.Yellow style={styles.btn} text={'IMDB Page'} action={() => onPress(movie)} />
            </View>

            <View style={{ height: 16 }} />
            <Subheading style={styles.subheading}>{movie.overview != '' ? movie.overview : 'No Description Available'} </Subheading>
          </ContentContainer>)
}

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
    color: color('#333')
      .alpha(1)
      .rgb()
      .string(),
  },
  subheading: {
    color: color('#333')
      .alpha(1)
      .rgb()
      .string()
  }
});
