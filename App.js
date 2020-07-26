import React from 'react'
import {} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Counter from './src/Screens/Counter'
import UsingFlatlist from './src/Screens/UsingFlatlist'
import Main from './src/Screens/Main'
import GetNewColor from './src/Screens/GetNewColor'
import ReducerScreen from './src/Screens/ReducerScreen'
import CounterUsingReducer from './src/Screens/CounterUsingReducer'


const navigator = createStackNavigator(
  {
    count:Counter,
    flat:UsingFlatlist,
    mm:Main,
    newcolor:GetNewColor,
    reduce:ReducerScreen,
    rcount:CounterUsingReducer
  },
  {
    initialRouteName:'mm',
    defaultNavigationOptions:{
      title:'app',
    }

  }
);

export default createAppContainer(navigator)

