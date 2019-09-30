import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/home';
import Detail from './src/pages/detail';


const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        initialRouteName: true,
    },
    Detail: {
        screen: Detail,
    }
});

export default createAppContainer(AppNavigator);