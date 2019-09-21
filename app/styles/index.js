import { StyleSheet } from 'react-native';

export default Styles = {
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    borderBottomWidth: 1,
    borderBottomColor:  '#e6e6e6'
  },
  App: StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      width: '100%',
    },
    container: {
      flexGrow: 1,
      paddingTop: 30,
      alignItems: 'center',
      alignContent: 'flex-start',
      width: '100%',
    },
    centered: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    title: {
      height: 26,
      textAlign: 'center',
      color: '#fff',
      fontSize: 22,
      position: 'relative',
      marginBottom: 25,
    },
    input: {
      width: '55%',
      backgroundColor: 'rgba(255,255,255,.2)',
      fontSize: 26,
      color: 'rgba(255,255,255,1)',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 0,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderRightColor: '#222',
      borderRightWidth: 2,
    },
    submitButton: {
      width: '25%',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderRadius: 0,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      borderLeftWidth: 1,
      borderLeftColor: 'rgba(255,255,255,.2)',
    },
    submitText: {
      fontSize: 22
    }
  }),

  /* components/MovieList.js */
  MovieList: StyleSheet.create({
    view: {
      marginTop: 0,
      borderTopWidth: 1,
      borderTopColor: 'rgba(255,255,255,.3)',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      flex: 1,
      width: '100%'
    },
    container: {
      paddingBottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },

    item: {
      width: '100%',
      color: '#666',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 15,
    },
    cover: {
      width: '100%',
      height: '100%',
      alignSelf: 'center'
    },
    emptySet: {
      color: '#fff',
      marginTop: 25,
      fontSize: 16
    }
  }),

  /* views/Movie.js */
  Movie: StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      backgroundColor: '#111'
    },
    container: {
      flexGrow: 1,
      paddingTop: 30,
      alignItems: 'center',
      alignContent: 'flex-start',
    },
    centered: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 22,
      position: 'relative',
      marginBottom: 25,
      width: '80%',
      alignSelf: 'center'
    },
    plot: {
      textAlign: 'left',
      color: '#fff',
      fontSize: 16,
      position: 'relative',
      marginBottom: 25,
      width: '80%',
      alignSelf: 'center'
    },
    image: {
      width: 300,
      height: 466,
      alignSelf: 'center'
    },
  }),

  /* Buttons.js */
  Buttons: StyleSheet.create({
    button: {
      backgroundColor: 'red',
      paddingTop: 20,
      paddingBottom: 20,
      width: '80%',
      borderRadius: 40
    },
    text: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
}