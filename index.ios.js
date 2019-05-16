import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import MainNav from './src/MainNav';
//import FlexDimensionsBasics from './js/Demo/FlexDimensionsBasics'
import SPRNComponent from './src/SPRNComponent';
export default class iOSRN extends SPRNComponent {
    render() {
        return (
            <MainNav />
        );
    }
}

AppRegistry.registerComponent('iOSRN', () => iOSRN);