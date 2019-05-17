import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, NativeModules,
  Button,
  AppRegistry } from 'react-native';


const uiManager = NativeModules.RCTUIManager;

export default class SPRNComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps,nextState){
        const viewState = nextProps['viewStateChange'];

        if (this.props['viewStateChange'] === viewState) {
            return true;
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
       //alert(this.props + this.state);
    }

    componentDidMount() {
        //SPCodepush.notifyAppReady();
    }

    componentWillUnmount() {
        //uiManager.removeSubviewsFromContainerWithID(this.rootTag);
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