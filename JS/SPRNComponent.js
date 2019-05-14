import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, NativeModules,
  Button,
  AppRegistry } from 'react-native';

export default class SPRNComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps,nextState){
        const viewState = nextProps['viewStateChange'];

        if (this.props['viewStateChange'] === viewState) {
            return false;
        }
        switch (viewState) {
            case 'viewWillAppear':
                this.viewWillAppear();
                return false;
            case 'viewDidAppear':
                this.viewDidAppear();
                return false;
            case 'viewWillDisappear':
                this.viewWillDisappear();
                return false;
            case 'viewDidDisappear':
                this.viewDidDisappear();
                return false;
            default:
                break;
        }
        return true;
    }


    //RN生命周期
    componentWillMount() {
       
    }

    componentDidMount() {
        //SPCodepush.notifyAppReady();
    }


    //自定义方法
    viewWillAppear() {
        console.log('viewWillAppear');
    }

    viewDidAppear() {
        console.log('viewDidAppear');
    }

    viewWillDisappear() {
        console.log('viewWillDisappear');
    }

    viewDidDisappear() {
        console.log('viewDidDisappear');
    }
}