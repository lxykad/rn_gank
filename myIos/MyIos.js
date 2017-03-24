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

export default class MyIos extends Component {

    constructor(props) {
        super(props)
        this.state={
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490257276249&di=935742cf9c8bb9e243f74ec6a3fc11cc&imgtype=0&src=http%3A%2F%2Fuploads.yjbys.com%2Fallimg%2F201609%2F3958-1609101IJ4462.jpg',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ios</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection:'row',
        paddingTop:10,
        backgroundColor:'#ffffff',

    },
    image1:{
        width:100,
        height:100,
        marginTop:20,
    },
    image2:{
        width:100,
        height:100,
        marginTop:20,
    }
});

AppRegistry.registerComponent('MyIos', () => MyIos);