/**
 * Created by lxy on 2017/3/28.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    BackAndroid,
    Navigator,
    StatusBar,
    WebView,
    BackHandler
} from 'react-native';

import BackBaseComponent from '../components/BackBaseComponent'
import TitleWithBack from '../components/TitleWithBack'

export default class CommonDetail extends BackBaseComponent {

    constructor(props) {
        super(props)

        this.state = {
            url: 'https://www.baidu.com/'
        }
    }

    render() {

        return (

            <View style={styles.container}>
                <TitleWithBack title={this.props.url} onBackPress={this._handleBack.bind(this)} />
                <WebView
                    ref="webview"
                    source={{uri:this.props.url}}
                    automaticallyAdjustContentInsets={false}
                    decelerationRate="normal"
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    startInLoadingState={true}
                />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#d5d5d5',


    },
    webViewStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#39c6c1'
    },
    titleStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 2
    }
});


AppRegistry.registerComponent('CommonDetail', () => CommonDetail);



