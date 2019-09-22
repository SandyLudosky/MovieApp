import styled from 'styled-react-native'
import { Text } from 'react-native'
import { Headline, Subheading } from 'react-native-paper'


 const TextTitle = styled(Text)(()=> {
    return {
      fontSize: 20
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
  const TextHeading1 = styled(Text)(()=> {
    return {
      fontSize: 32
    }
  })
  const TextHeading2 = styled(Text)(()=> {
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
  const BoldHeadline = styled(Headline)(() =>{
    return {
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export {
    TextTitle, 
    TextTitleSemiBold,
    TextBold,
    TextDescription, 
    TextHeading1,
    TextHeading2,
    BoldHeadline
} 