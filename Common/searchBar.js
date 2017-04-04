/**
 * Created by lxy on 2017/4/4.
 * 搜索框的封装
 * 输入框和按钮的属性采用外部传入，如plachholder等
 * 使用 ...this.props将外部传入的属性设置给 TextInput TouchableOpacity
 *
 * 边框颜色、线宽、高度等自己写，不用外部传入
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

//自定义组件  待完善
export default class searchBar extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <TextInput/>
                </View>
                <TouchableOpacity>
                    <Text>搜索</Text>
                </TouchableOpacity>

            </View>

        );
    };

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
        height: 200,
        marginBottom: 8,
        resizeMode: 'cover',//'cover', 'contain', 'stretch'
    },
    titleStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 2
    }
});
AppRegistry.registerComponent('searchBar', () => searchBar);