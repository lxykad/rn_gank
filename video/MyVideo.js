/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class MyVideo extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (

                <Text>视频</Text>

        );
    }
}

AppRegistry.registerComponent('MyVideo', () => MyVideo);