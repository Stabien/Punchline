import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import Chrono from './Chrono.js'

const chrono_stack_navigator = createStackNavigator({
    Chrono: {
        screen: Chrono,
        navigationOptions: {
            title: "Chronomètre"
        }
    }
});

export default createAppContainer(chrono_stack_navigator)
