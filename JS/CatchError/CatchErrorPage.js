import React, {PureComponent} from 'react';
import {
    DeviceEventEmitter,
    TouchableOpacity,
    View,
    Text,
    Alert,
    StyleSheet
} from 'react-native'

// import styles from "./styles";


import {setJSExceptionHandler} from './error_guard'

/**
 * JS_Exceptions：你的Javascript代码产生的错误
 *
 * 第一个参数，错误发生时调用的函数
 * 第二个参数，设置true，在开发模式下调用处理程序代替 red 屏幕
 *
 * error 错误信息
 * isFatal 是否是致命的，一定发生崩溃的
 */

// setJSExceptionHandler((e, isFatal)=>{
//     // 您可以捕获这些未处理的异常并执行诸如显示警报或弹出窗口之类的任务，执行清理甚至点击API以在关闭应用程序之前通知开发团队。
//     if (isFatal) {
//         Alert.alert(
//             'Unexpected error occurred',
//             `
//             ${e && e.stack && e.stack.slice(0, 500)}...
//             `,
//             [{
//                 text: 'OK',
//                 onPress: () => {
//                     console.log('ok');
//                 }
//             }]
//         );
//     } else {
//         console.log(e);
//     }
    
    
// }, true)
//
//
//
//
// /*
// * Native_Exceptions：Native Modules产生的错误。仅在正式环境下调用
// *
// * 第一个参数，错误发生时调用的函数
// * 第二个参数，android下使用，用于在程序发成错误时，是否自动关闭程序
// * 第三个参数，设置true，确保定义的其他异常处理可以及时的调用
// *
// * errorString 错误信息
// * */
//
// setNativeExceptionHandler((errorString)=>{
//     //自定义全局错误处理程序、崩溃日志
//
//     //注意：通过JS警告或显示任何UI更改，在NATIVE ERRORS的情况下不会触发
// },false, true)
//

// @HocErrorCatch
export default class CatchErrorPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        },()=>{
            if (this.state.count == 5){
                new Error()
                throw new Error('i crashed！！！')
            }
        })
    }
    render() {
        // let a = [1,2,3]
        // let value = a[3].toString()

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>点击我，第5次就崩溃啦</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{

                    // 找不到方法
                     this.abc()

                    // 对于 undefined 进行操作
                    // let a = [1,2,3]
                    // let value = a[3].toString()



                }}>
                    <Text>点击我，直接崩溃</Text>
                </TouchableOpacity>
                <Text style={styles.text}>正常页面显示</Text>
            </View>

        )
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
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 15,
        marginTop: 10,
    },
});