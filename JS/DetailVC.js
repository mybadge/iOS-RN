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

import AppDef from './Common/ComponentDef'

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

    }
    render() {
        return (
            <ScrollView 
                scrollEnabled={false}
                ref={(scrollView)=> this.myScrollView=scrollView} 
                style={{flex:1}}>
                
                <FlatList
                    style={{width:SCREEN_W, height:SCREEN_H-AppDef.naviheight-AppDef.SafeAreaBottomHeight}}
                    data={this.state.dataSource}
                    renderItem={(item) => <Text style={styles.text}>{item.item.content}</Text>}
                    keyExtractor={item => item.content}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    // onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollEndDrag={this._onScrollEndDrag}
                />

                <SPWebView
                    onLayout={(event)=> this.layout = event.nativeEvent.layout }
                    style={{
                        width:SCREEN_W, 
                        height:SCREEN_H-AppDef.naviheight, 
                        marginTop: 10}} />
                
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
        this.setState({
            laoding: true
        });
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
            this.requestData();
          });
        //   this.clickToScroll();
    }

    clickToScroll = () => {
        //先用measure测量出位置
        // this.totopView.measure((fx, fy, width, height, px, py) => {
        //     console.log('Component width is: ' + width)
        //     console.log('Component height is: ' + height)
        //     console.log('X offset to frame: ' + fx)
        //     console.log('Y offset to frame: ' + fy)
        //     console.log('X offset to page: ' + px)
        //     console.log('Y offset to page: ' + py)
        //     //然后用scrollTo跳转到对应位置
        //     //x是水平方向
        //     //y是垂直方向
        //     this.myScrollView.scrollTo({ x: px, y: py+height, animated: true });
        // });
        // this.myScrollView.scrollTo({ x: 0, y: this.layout.y, animated: true});

        this.myScrollView.scrollToEnd();
    }

    _onScrollEndDrag = (e)=> {
        var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight+30){
            console.log('上传滑动到底部事件')
            this.myScrollView.scrollToEnd();
        }
    }

    renderFooter = ()=>{
        if (!this.state.loading) return null;
        return (
            <View 
                ref={(view)=> this.totopView=view } 
                style={{
                        flex: 1,
                        height: 30,
                        backgroundColor: "#CED0CE",
                        alignItems: "center",
                        justifyContent:'center'
                }}
            >
                <Text style={{ alignItems: "center", justifyContent:'center'}} onPress={()=>this.clickToScroll()}>下拉查看更多详情</Text>
            </View>
          );
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