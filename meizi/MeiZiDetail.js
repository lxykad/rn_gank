/**
 * Created by lxy on 2017/3/27.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    BackAndroid,
    ToastAndroid,
    Navigator,
    StatusBar
} from 'react-native';

var count = 2;
export default class MeiZiDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-03-26-17495078_643307445877569_4485136026821459968_n.jpg',
        }
    }

    /* static defaultProps = {
     url: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-03-26-17495078_643307445877569_4485136026821459968_n.jpg',
     }*/

    render() {

        return (

            <View>
                <StatusBar
                    backgroundColor="#00000000"
                    barStyle="light-content"
                    translucent={true}
                />
                <Image style={styles.imageStyle} source={{uri:this.props.url}}/>
            </View>

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
    content: {
        width: 100,
        height: 100,
        backgroundColor: '#39c6c1'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',//'cover', 'contain', 'stretch'
    },
    titleStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 2
    }
});

AppRegistry.registerComponent('MeiZiDetail', () => MeiZiDetail);