
import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import  Home from './Home'
import  Two from  './Two'
import SPWebView from './SPWebView';
import FadeAnimate from './Animate/FadeAnimate';

import {
  NativeModules,
  NativeAppEventEmitter,//导入
  Button
} from 'react-native';
import DetailVC from './DetailVC';
import CatchErrorPage from './CatchError/CatchErrorPage';
import FlexDimensionsBasics from './Demo/FlexDimensionsBasics';
import Touchables from './Demo/Touchables';
import SectionListBasics from './Demo/SectionListBasics';
import Networking from './Demo/Networking';


//在JavaScript中调用Object-C定义的方法，需要先导入NativeModules
//此处的RNCalliOSAction就是我们在iOS上新建的类名
//如果在iOS中设置了导出了类的名字，此处需要和导出的名字一致
var RNCalliOSAction = NativeModules.RNCalliOSAction;


const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'This is Home',
      headerLeft: (
          <Button
              title='返回'
              onPress={ ()=> {
                  RNCalliOSAction.calliOSActionWithOneParams('backAction');
              }}
          />
      ),
      headerRight: (
        <Button
              title='Next'
              style={{color: 'black'}}
              onPress={ ()=> {
                  RNCalliOSAction.openNativePage({'pageName': 'SectionListController'})
                  //RNCalliOSAction.calliOSActionWithOneParams('backToTopAction');
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
  FadeAnimate: {
    screen: FadeAnimate,
    navigationOptions: {
      title: 'FadeAnimate'
    }
  },
  DetailVC: {
    screen: DetailVC,
    navigationOptions: {
      title: 'DetailVC'
    }
  },
  CatchErrorPage: {
    screen: CatchErrorPage,
    navigationOptions: {
      title: 'CatchErrorPage'
    }
  },
  FlexDimensionsBasics: {
    screen: FlexDimensionsBasics,
    navigationOptions: {
      title: 'FlexDimensionsBasics'
    }
  },
  Touchables: {
    screen: Touchables,
    navigationOptions: {
      title: 'Touchables'
    }
  },
  SectionListBasics: {
    screen: SectionListBasics,
    navigationOptions: {
      title: 'SectionListBasics',
      headerRight: (
        <Button
              title='Next'
              style={{color: 'black'}}
              onPress={ ()=> {
                  RNCalliOSAction.openNativePage({'pageName': 'SectionListController'});
              }}
          />
      ),
    }
  },
  Networking: {
    screen: Networking,
    navigationOptions: {
      title: 'Networking'
    }
  },
  
});

const MainNav = createAppContainer(MainNavigator);

export default MainNav;
