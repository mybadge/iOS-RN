
import React, { Component } from 'react';

import { 
    Animated, 
    StyleSheet,
    Button,
    Text,
    View,
    Easing,
    ScrollView,
    Dimensions,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class FadeAnimate extends Component {
    
    constructor(props) {
        super(props);
        this.fadeInAnimated = new Animated.Value(0); // 渐隐动画初始值，默认为0，透明
        this.spinValue = new Animated.Value(0);
        this.animatedValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0.5);

        this.btnOnPress = this.btnOnPress.bind(this);
        this.btnOnPressRotate = this.btnOnPressRotate.bind(this);
        this.onPressAnimted = this.onPressAnimted.bind(this);
        this.onPressAnimtedSpring = this.onPressAnimtedSpring.bind(this);

        this.state = {
            marginTop: 50
        };
        
    }


    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],                // [0,0.5,1]改成这样会有不同的效果
            outputRange: ['0deg', '360deg']    //  ['0deg', '360deg','0deg']改成这样会有不同的效果，
        });
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.3, 1], // 0-0.3     0.3-1
            outputRange: [0, 300, 0] // 0-300     300-0     速度会不一样
        });
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress = {()=>{
                    // 这个只是这个布局改变了才会有动画效果
                    //其实代码里只是调用了这一行LayoutAnimation.spring();,布局修改的时候就显得不那么生硬了
                    // 这样写也是可以的，整个页面的布局改变都会有动画效果
                    // componentWillUpdate() {
                    //        LayoutAnimation.spring();
                    //    }

                        LayoutAnimation.spring();
                        this.setState({marginTop:this.state.marginTop + 100})
                    }}
                                      style={{  width:120,
                                height:40,
                                alignItems:'center',
                                marginTop:this.state.marginTop,
                                justifyContent:'center',
                                backgroundColor:'#00ffff',
                                borderRadius:20}}>
                        <Text>Text DOWN</Text>
                    </TouchableOpacity>
                </View>
            <View style={{flex: 1, backgroundColor: '#eee', alignItems: 'center' }}>
                <Animated.View style={[styles.downViewStyle, {opacity: this.fadeInAnimated}]} >
                    <Text>aaaaa</Text>
                </Animated.View>

                <Button title="Fade动画" style={styles.btn} onPress={()=>this.btnOnPress()}/>

                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}] }}
                        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
                <Button title="Rote动画" style={styles.btn} onPress={()=>this.btnOnPressRotate()}/>
                <Animated.View
                    style={{
                        marginLeft: movingMargin,
                        marginTop: 10,
                        height: 30,
                        width: 40,
                        backgroundColor: 'orange'                  
                    }}
                />
                <Button title="moving动画" style={styles.btn} onPress={()=>this.onPressAnimted()}/>
                <Animated.Text
                    style={{
                        fontSize: textSize,
                        marginTop: 10,
                        color: 'green'}} >
                        Animated Text!
                </Animated.Text>
                <Button title="Animated Text动画" style={styles.btn} onPress={()=>this.onPressAnimted()}/>


                <Button title="多个动画顺序播放" style={[styles.btn, {marginTop: 20}]} onPress={()=>this.opPressAnimtedASequence()}/>
                <Button title="多个动画同事播放" style={[styles.btn, {marginTop: 20}]} onPress={()=>this.opPressAnimtedParallel()}/>



                <View style={styles.container}>
                    <Animated.Image
                        style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
                        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
                        <Button title="Spring Text动画" style={styles.btn} onPress={()=>this.onPressAnimtedSpring()}/>
                </View>
                
            
            </View>
            
            </ScrollView>
        )
    }

    btnOnPress() {
        this.fadeInAnimated.setValue(0);
        Animated.timing(this.fadeInAnimated, {
            toValue: 1, // 1为不透明
            duration: 500,
            easing: Easing.linear
        }).start();
    }

    btnOnPressRotate() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1, // 此处的1 已经被上面的spin映射过了， [0, 1] 》 ['0deg', '360deg']
                duration: 4000,
                easing: Easing.linear
            }
        ).start();
    }
    onPressAnimted() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
    }

    onPressAnimtedSpring() {
        /*
        * 值的范围是0-1
        * 默认值越大，弹性越小，0.9到1之间的值小，弹性小
        * 默认值越小，弹性越大，0.1到1之间的值大，弹性大
        * 例如：默认值0.5，弹性到0.5，然后放大，大概会放大到1.3的样子，然后弹性慢慢减小，到达1
        * */
       this.springValue.setValue(0.5);
       Animated.spring(
           this.springValue,
           {
               toValue: 1,
               friction: 1
           }
       ).start()
    }

    /// 多个动画效果顺序播放
    opPressAnimtedASequence() {
        Animated.sequence([
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.fadeInAnimated, {
                    toValue: 1, // 1为不透明
                    duration: 500,
                    easing: Easing.linear
                }
            )
        ]).start(()=>{this.loadAnimation()});
    }
    
    loadAnimation() {
        this.onPressAnimtedSpring();
    }

    opPressAnimtedParallel() {
        Animated.parallel([
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.fadeInAnimated, {
                    toValue: 1, // 1为不透明
                    duration: 500,
                    easing: Easing.linear
                }
            )
        ]).start(()=>{this.loadAnimation()});
    }

}

const styles = StyleSheet.create({
    downViewStyle: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 100,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flex:1,
        marginTop: 10,
        marginBottom:10,
        width: 64,
        height:44,
    },
    container: {
        flex: 1,
        width,
        height,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})