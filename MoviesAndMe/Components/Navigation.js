import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chrono from './Chrono.js'
import AudioPlayer from './AudioPlayer.js'
import Search from './Search.js'
import DisplayCategories from './DisplayCategories.js'

const stack_navigator = createStackNavigator({
    DisplayCategories: {
        screen: DisplayCategories
    },
    AudioPlayer: {
        screen: AudioPlayer,
        navigationOptions: {
            title: "Un nom random"
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Search"
        }
    }
});

export default createAppContainer(stack_navigator)
