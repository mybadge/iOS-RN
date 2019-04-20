
import React, { Component } from 'react';
import {
    Button
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import  Home from './Home'
import  Two from  './Two'

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'This is Home',
      headerLeft: (
              <Button
                  title='返回'
                  onPress={ ()=> {
                      alert('aa， todo back');
                  }}
              />
          ),
    }
  },
  Two: {screen: Two},
});

const App = createAppContainer(MainNavigator);

export default App;
