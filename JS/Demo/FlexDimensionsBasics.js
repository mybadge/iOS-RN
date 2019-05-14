import React, { Component } from 'react';

import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    TextInput
 } from 'react-native';

import AppDef from '../Common/ComponentDef';


export default class FlexDimensionsBasics extends Component {

    constructor(props) {
        super(props);
        let data = []
        for (let i=0; i < 30; i++) {
            data.push(i)
        }
        this.state = {
            data: data,
            text: ''
        }
    }

    render() {
        return (
            <ScrollView style={{flex:1, backgroundColor: '#eee'}}>
                <View style={styles.page}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{flex:1, backgroundColor: 'red'}} />
                    <View style={{flex:2, backgroundColor: 'blue'}} />
                </View>
                <View style={styles.page}>
                    <ScrollView style={{marginTop: 20, height: 60, width: AppDef.ScreenW}} 
                        horizontal={true}
                        pagingEnabled={true}  >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {
                                this.state.data.map(index =>{ 
                                    return (
                                        <View key={index} style={{width: 50, height: 50, backgroundColor: 'powderblue', marginLeft: 10}}>
                                            <Text>{index}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                       
                    </ScrollView>

                    <TextInput style={{height: 40, marginTop: 10,marginLeft:10, marginRight:10, borderColor: '#bbb', borderWidth: 1}} 
                        placeholder='Type here to translate'
                        onChangeText={(text)=> this.setState({text})}
                     />
                     <Text style={{padding:10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
                     </Text>

                </View>

                <View style={[styles.page, styles.column]}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={[styles.page, {backgroundColor: '#ccc'}]}>
                    <View style={styles.stretch}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{height: 100, backgroundColor: 'steelblue'}} />
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        width: AppDef.ScreenW, 
        height:AppDef.ScreenH-64,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    stretch: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})