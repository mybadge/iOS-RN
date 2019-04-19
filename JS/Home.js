import React, { Component } from './node_modules/react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
//需要导入NativeModules组件，这个是官方提供给我们与原生交互的组件，通过它我们才能调用到原生的方法
    NativeModules
} from 'react-native';
// 看到 RTModule 是不是很熟悉，没错这个就是原生中写的那个类
// 后面一定要一样哦
var RNModules  = NativeModules.RTModule;
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
              // RNOpenOneVC这个也是写在原生里面的再RNModules中哦~
                <Text style={styles.instructions} onPress={()=>RNModules.RNOpenOneVC('测试')} >
                我还是RN界面, 点我才能回原生哦
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});