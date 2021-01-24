import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screen/SearchScreen'
import DetailScreen from './src/screen/DetailScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title:'Businsess Search'
    }
  }
)

export default createAppContainer(navigator)