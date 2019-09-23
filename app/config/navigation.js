import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, MovieScreen, ModalScreen } from '../components/scenes'

const AppNavigator  = createStackNavigator({
    Home: { screen: HomeScreen },
    Movie: { screen: MovieScreen },
    Modal: {
        screen: ModalScreen,
        mode: 'modal'
     }
    }
);
export default AppNavigator 