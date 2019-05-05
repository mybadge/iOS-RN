/**
 * Created by guohongan on 2017/7/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.instructions} onPress={()=>this.navigatePress(navigate)}>
                  我是RN,点我跳转
                </Text>

                <Text style={styles.instructions} onPress={()=>this.navigatePressToWebView(navigate) }>
                  点我跳转 webView
                </Text>

                <Text style={styles.instructions} onPress={()=>navigate('FadeAnimate') }>
                  点我跳转 FadeAnimate
                </Text>

                <Text style={styles.instructions} onPress={()=>navigate('DetailVC') }>
                  点我跳转 商品详情
                </Text>
            </View>
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
        marginBottom: 15,
        marginTop: 10,
    },
});