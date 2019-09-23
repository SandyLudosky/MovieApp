import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, MovieScreen, WebviewScreen } from '../components/scenes'

const MainStack  = createStackNavigator({
    Home: { screen: HomeScreen },
    Movie: { screen: MovieScreen }
    }
);

const AppNavigator = createStackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      WebView: {
        screen: WebviewScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );
export default AppNavigator 