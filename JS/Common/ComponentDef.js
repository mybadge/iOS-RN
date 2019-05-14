/**
 * Created by liangfengying on 2019/3/13.
 */

// ComponentDef.js

/*！！！！！！所有公用组件公用常量和公共引用的第三方在这里申明，引用方式如下：
 eg:
 import AppDef,{PropTypes} from '@AppComponents/ComponentDef';

 ！！！！别的文件中不能直接引用：const {width, height} = Dimensions.get('window');
 */

import {
    Dimensions,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isWeb = (!isIOS && !isAndroid);
const isIPhoneX = (Platform.OS === 'ios' && width === 375.0 && height===812.0);
const isIPhoneXS = (Platform.OS === 'ios' && width === 375.0 && height===812.0);
const isIPhoneXSMAX = (Platform.OS === 'ios' && width === 414.0 && height===896.0);
const isIPhoneXR = (Platform.OS === 'ios' && width === 414.0 && height===896.0);
const hasSafeArea = (isIPhoneX || isIPhoneXR || isIPhoneXSMAX || isIPhoneXS);
const ScreenW = isWeb?375.0:width;
const ScreenH = isWeb?667.0:height;

const AppDef = {

    //版本号
    version: '1.0.0',

    //android虚拟键显示隐藏
    OnGlobalLayout: 'onGlobalLayout',
    isIOS:isIOS,
    isAndroid:isAndroid,
    isApp:(isIOS || isAndroid),
    isWeb:isWeb,


    isIPhoneX:isIPhoneX,
    isIPhoneXS:isIPhoneXS,
    isIPhoneXSMAX:isIPhoneXSMAX,
    isIPhoneXR:isIPhoneXR,
    hasSafeArea:hasSafeArea,

    //
    ScreenW:ScreenW,
    ScreenH:ScreenH,
    naviheight:(isAndroid ? 50.0 : (hasSafeArea)?88.0:64.0),
    SafeAreaTopHeight:44.0,
    SafeAreaBottomHeight:34.0,
    ZoomedScale:ScreenW/375.0,

    debug:0,
    apiServer:'',
};

export default AppDef;

export {
    AppDef,
    PropTypes
};