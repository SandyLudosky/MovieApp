import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, MovieScreen } from '../components/scenes'

const AppNavigator  = createStackNavigator({
    Home: { screen: HomeScreen },
    Movie: { screen: MovieScreen }
});
export default AppNavigator 