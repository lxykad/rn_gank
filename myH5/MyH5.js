/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

export default class MyH5 extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (

            <ScrollView>

                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>
                <Image source={require('../drawable/h5.png')}></Image>

            </ScrollView>

        );
    }
}

AppRegistry.registerComponent('MyH5', () => MyH5);