import styled from 'styled-react-native'
import { Text, View } from 'react-native'
import { Headline } from 'react-native-paper'

const ContentContainer = styled(View)(() => {
    return {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16
    }
})
const TextTitle = styled(Text)(() => {
  return {
    fontSize: 20
  }
})
const TextTitleSmallBold = styled(TextTitle)(() => {
  return {
    fontWeight: '400',
    fontSize: 17
  }
})
const TextTitleSemiBold = styled(TextTitle)(() => {
  return {
    fontWeight: '400'
  }
})
const TextBold = styled(Text)(() => {
  return {
    fontWeight: '600'
  }
})
const TextHeading1 = styled(Text)(() => {
  return {
    fontSize: 32
  }
})
const TextHeading2 = styled(Text)(() => {
  return {
    fontSize: 24
  }
})
const TextDescription = styled(Text)(() => {
  return {
    fontSize: 14,
    color: '#666'
  }
})
const TextEmpty = styled(Text)(() => {
  return {
    fontSize: 20,
    color: '#ccc',
    fontWeight: '600'
  }
})
const BoldHeadline = styled(Headline)(() => {
  return {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export {
  TextTitle,
  TextTitleSemiBold,
  TextTitleSmallBold,
  TextBold,
  TextDescription,
  TextHeading1,
  TextHeading2,
  BoldHeadline,
  TextEmpty, 
  ContentContainer
} 