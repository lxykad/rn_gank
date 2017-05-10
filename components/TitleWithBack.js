/**
 * Created by lxy on 2017/5/10.
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
    StatusBar,
    TouchableOpacity
} from 'react-native';

export default class TitleWithBack extends Component {


    static propTypes = {
        onBackPress: PropTypes.func
    };

    render() {

        const {onBackPress,title} = this.props;

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={onBackPress}>

                    <Image style={styles.arrowtyle} source={require('../drawable/arrow_left.png')}/>

                </TouchableOpacity>


                <Text style={styles.textstyle}>{this.props.title}</Text>


            </View>
        );

    }

    clickBack() {

        // alert('back')
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
        backgroundColor: '#4a9df8',
    },

    arrowtyle: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    textstyle: {
        fontSize: 18,
        color: '#fff',
        width: '100%',
        marginRight: 10,
        alignSelf: 'center'
    },
});

AppRegistry.registerComponent('TitleWithBack', () => TitleWithBack);
