/**
 * Created by guohongan on 2017/7/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

;
// var raToRnManger = NativeModules.EventEmitterManger
export default class Home extends Component {


  componentWillMount(){
      //var raToRnMangerEmitter = new NativeEventEmitter(raToRnManger)
      // const subscription = raToRnMangerEmitter.addListener("EventReminder",
      //    (reminder) => {
      //        console.log("test")
      //          this.setState({
      //              name:"B"
      //          })
      //    }
      // );
}

    constructor(props) {
      super(props);
      const data = ['Two', 'SPWebView', 'FadeAnimate', 'DetailVC', 'CatchErrorPage', 
      'FlexDimensionsBasics', 'Touchables', 
      'SectionListBasics', 
      'SectionListBasics2', 
      'SectionListBasics3', 
      'SectionListBasics4', 
      'SectionListBasics5', 
      'SectionListBasics6', 
      'SectionListBasics7', 
      'SectionListBasics8', 
      'Networking'
    ];

      this.state = ({
        data: data,
        name: ''
      }) 
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
          <ScrollView style={styles.container}>
            <View style={styles.container2}>
            {
              this.state.data.map((pageName)=>{
                return (
                  
                  <TouchableOpacity key={pageName}>
                  <Text  style={styles.instructions} onPress={()=>navigate(pageName) }>
                  点我跳转 {pageName}
                </Text></TouchableOpacity>
                )
              })
            }
            </View>
          </ScrollView>
        );
    }
    navigatePress=(navigate)=>{
        navigate('Two', {});
    }
    navigatePressToWebView= (navigate)=>{
        navigate('SPWebView', {});
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    container2: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
      paddingLeft: 15,
      paddingTop: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
        height: 35,
        marginTop: 10,
    },
});