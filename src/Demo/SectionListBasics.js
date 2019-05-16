import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, NativeModules,
  Button,
  AppRegistry } from 'react-native';
import SPRNComponent from '../SPRNComponent';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

var RNCalliOSAction = NativeModules.RNCalliOSAction;
export default class SectionListBasics extends SPRNComponent {

  constructor(props) {
    super(props);
    this.state = ({
      data: ['Jackson', 'James', 'Jillian', 'Devin']
    })
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>
          {/* {
            this.state.data.map((text)=>{
              return this.renderRow(text);
            })
          } */}
          {/* <SectionList
            sections={[
              {title: 'D', data: ['Jackson', 'James', 'Jillian', 'Devin']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jackson', 'James', 'Jillian', 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => this.renderRow(item)}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          /> */}
          <FlatList 
            data = {this.state.data}
            renderItem={(item)=> this.renderRow(item.item)} 
            keyExtractor={(item, index) => index}
          />
            <Button
                title='addData'
                onPress={ ()=> {
                    console.log('set data aaaa');

                    const data = this.state.data;
                    this.setState({
                      data: data.concat(['ddd', 'cccc', 'eeee'])
                    });
                }}
            /> 
          <Button
                title='返回Top'
                onPress={ ()=> {
                    RNCalliOSAction.calliOSActionWithOneParams('backToTopAction');
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
                    //RNCalliOSAction.openNativePage({'pageName': 'SPRNBaseController', 'modularName':'SectionListBasics'});
                    this.openNativePage('SectionListBasics');
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

AppRegistry.registerComponent('SectionListBasics', () => SectionListBasics);