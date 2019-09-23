import { StyleSheet } from 'react-native';
export default Styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'stretch'
  },
  content: {
    flex: 1,
    width: 200, 
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width:150, 
    height: 150
  }
})