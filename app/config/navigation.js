import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, MovieScreen2 } from '../components/scenes'

const AppNavigator  = createStackNavigator({
    Home: { screen: HomeScreen },
    Movie: { screen: MovieScreen2 }
});
export default AppNavigator 