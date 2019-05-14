import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import MainNav from './js/MainNav';
import FlexDimensionsBasics from './js/Demo/FlexDimensionsBasics'
import SPRNComponent from './js/SPRNComponent';
export default class iOSRN extends SPRNComponent {
    render() {
        return (
            <FlexDimensionsBasics />
        );
    }
}

AppRegistry.registerComponent('iOSRN', () => iOSRN);