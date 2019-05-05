import React, {Component} from 'react';

import { View, Text, 
    ScrollView, 
    FlatList, StyleSheet, Dimensions, 
    Animated,
    TouchableNativeFeedback,
    ActivityIndicator } from 'react-native'; 
import SPWebView from './SPWebView';

const SCREEN_H = Dimensions.get('window').height;
const SCREEN_W = Dimensions.get('window').width;

export default class DetailVC extends Component {
    constructor() {
        super()
        
        let data = [];
        for (let i=0; i < 30; i++) {
            data.push({index: i, content: 'item'+ (i+1)})
        }
        this.state = {
            dataSource: data,
            error: false,
            page: 1,
            refreshing: false,
            loading: false,
        };
        this.aniBack = new Animated.Value(0);
    }
    render() {
        return (
            <ScrollView style={{flex:1}}>
                
                <FlatList
                    style={{width:SCREEN_W, height:SCREEN_H}}
                    data={this.state.dataSource}
                    renderItem={(item) => <Text style={styles.text}>{item.item.content}</Text>}
                    keyExtractor={item => item.content}
                    // ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    // onEndReached={this.handleLoadMore}
                    // onEndReachedThreshold={0} 
                    bounces={false}
                />
                <SPWebView style={{width:SCREEN_W, height:SCREEN_H, marginTop: 10}} />
                {/* <Animated.View style={[{
                    marginTop: this.aniBack.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -SCREEN_H],
                        })
                    }]}
                >
                </Animated.View> */}
                
            </ScrollView>
        );
    }

    handleRefresh = ()=>{
        this.setState({
            page: 1,
            refreshing: true,
            loading: false,
            data: [],
          }, () => {
            this.requestData();
          });
    }

    requestData = ()=>{
        const url = 'https://api.github.com/users/mybadge/repos';
        fetch(url).then(res => {
          console.log('started fetch');
          return res.json()
        }).then(res => {
            console.log('==> fetch data', res);
            this.setState({
                data: [...this.state.data, ...res], 
                error: res.error || null,
                laoding: false,
                refreshing: false,
            });
        }).catch(err => {
          console.log('==> fetch error', err);
          this.setState({ error: err, loading: false, refreshing: false});
        });
    }

    handleLoadMore = ()=>{
        this.setState({
            page: 1,
            refreshing: true,
            loading: false,
            data: [],
          }, () => {
            this._startAniBackTop();
          });
    }

    renderFooter = ()=>{
        if (this.state.loading) return null;
        return (
            <View
              style={{
                    flex: 1,
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE",
                    alignItems: "center"
              }}
            ><Text>下拉查看更多详情</Text>
              <ActivityIndicator animating size="large" />
            </View>
          );
    }

    /// 上滑
    _startAniBackTop = ()=> {
        this.setState({
            data: [], 
            error: null,
            laoding: false,
            refreshing: false,
        });
        // this.aniBack.setValue(0);
        // Animated.timing(this.aniBack, {
        //     duration: 1000,
        //     toValue: 1,
        // }).start(() => {
        // });
    }

    /// 下滑
    _startAniNext() {
        this.aniBack.setValue(0);
        Animated.timing(this.aniBack, {
            duration: 1000,
            toValue: 1,
        }).start(() => {
        });
    }
}


const styles = StyleSheet.create({
    text: {
        color: '#333', 
        marginTop: 10,
        marginLeft: 10,
        height:44,
    }
});