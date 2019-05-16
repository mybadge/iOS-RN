import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, NativeModules,
  Button,
  Image,
  AppRegistry } from 'react-native';
import SPRNComponent from '../SPRNComponent';
import { ScrollView } from 'react-native-gesture-handler';

var RNCalliOSAction = NativeModules.RNCalliOSAction;
export default class SectionListBasics2 extends SPRNComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: ['']
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image source={require('./../../images/设计模式.png')} />
          {
            this.state.data.map((text)=>{
              return this.renderRow(text);
            })
          }
          
          <Button
                title='返回Top'
                onPress={ ()=> {
                    RNCalliOSAction.calliOSActionWithOneParams('backToTopAction');
                }}
            />
            <Button
                title='addData'
                onPress={ ()=> {
                    const data = this.state.data;
                    
                    this.setState({
                      data: data.concat(['ddd', 'cccc', 'eeee'])
                    });
                }}
            />
        </View>
      </ScrollView>
    );
  }
  renderRow = (item)=>{
    return (
      <View key={item}>
          <Button
                title='Next1'
                style={{color: 'black', height: 44, width: 64}}
                onPress={ ()=> {
                    //RNCalliOSAction.openNativePage({'pageName': 'SPRNBaseController', 'modularName':'SectionListBasics2'});
                    this.openNativePage('SectionListBasics2');
                }}
            />
            <Button
                title='Next2'
                style={{color: 'black', height: 44, width: 64}}
                onPress={ ()=> {
                    this.openNativePage('iOSRN');
                }}
            />
             <Text style={styles.item}>{item}</Text>
      </View>
      
    )
  }

  openNativePage(pageName) {
    RNCalliOSAction.openNativePage({'pageName': 'SPRNBaseController', 'modularName': pageName});
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('SectionListBasics2', () => SectionListBasics2);