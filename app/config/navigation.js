import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, MovieScreen, ModalScreen } from '../components/scenes'

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
      Modal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );
export default AppNavigator 