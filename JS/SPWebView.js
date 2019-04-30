
import React, { Component } from 'react';
import { Text,
    StyleSheet,
 } from 'react-native'

 import { WebView } from 'react-native-webview'

class SPWebView extends Component {


    render() {
        return (
        
            <WebView
                    // style={{width:300,height:300}}
                    originWhitelist={['*']}
                    // source={{ html: '<h1>Hello world</h1>' }}
                    source={{ uri: 'https://www.baidu.com' }}
                    onLoadStart={this._onLoadStart}
                    onLoadEnd={this._onLoadEnd}
                    allowsInlineMediaPlayback={true}
                />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
})

export default SPWebView;
