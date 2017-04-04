/**
 * Created by lxy on 2017/4/4.
 *  工具类封装
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,// 获取屏幕宽高
    ActivityIndicator,// loading
} from 'react-native';

/**
 * 定义一个对象，其他作为属性
 */

var Util = {
    //屏幕尺寸
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    //网络请求 需要传入url 和成功、失败的回调函数
    getRequest(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failCallback(failCallback));
    },

    //loading 效果
    loading: <Text style={{marginTop:100,fontsize:30}}>loading</Text>//待以后修改


}

moudle.exports = Util;//导出