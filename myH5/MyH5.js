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

export default class MyH5 extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (

                <Text>前端</Text>

        );
    }
}

AppRegistry.registerComponent('MyH5', () => MyH5);