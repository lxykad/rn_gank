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
    TextInput,
    ScrollView
} from 'react-native';

import MeiZi from '../meizi/MeiZi';

export default class MyAndroid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 20,
            inputContent: '',
        }
    }

    render() {
        return (

            <ScrollView>

                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>
                <Image source={require('../drawable/android.png')}></Image>

            </ScrollView>

        );
    }

    getInputContent() {
        alert(this.state.inputContent);
    }

}

AppRegistry.registerComponent('MyAndroid', () => MyAndroid);