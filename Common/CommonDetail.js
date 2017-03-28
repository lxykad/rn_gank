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
    ListView,
    TouchableHighlight,
    BackAndroid,
    Navigator,
    StatusBar,
    WebView
} from 'react-native';

var DEFAULT_URL = 'http://www.lcode.org';
export default class CommonDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: 'https://www.baidu.com/'
        }
    }

    render() {

        return (


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

        );

    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {

            this.props.navigator.pop();

            return true;
        });
    }


}

const styles = StyleSheet.create({
    container: {
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



