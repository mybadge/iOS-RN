
import React from 'react';
import {
    Button
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import  Home from './Home'
import  Two from  './Two'
import SPWebView from './SPWebView';

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
  SPWebView: { 
    screen: SPWebView,
    navigationOptions: {
      title: 'this is webView'
    }
  },

});

const App = createAppContainer(MainNavigator);

export default App;
