/**
 * Created by lxy on 2017/4/4.
 * navigator的封装
 * 需要外部传入：
 *   component 需要展示的页面
 *   route对象  必须添加component属性，传值的话用passProps属性
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

export default class navigation extends Component {

    render() {

        //先创建route对象，约定格式
        var rootRoute = {
            component: this.props.component,
            passProps: {}
        }

        return (

            // <Navigator
            //     initialRoute={{component: MeiZi}}
            //     configureScene={this.configureScene}
            //     renderScene={this.renderScene}/>

            <Navigatior
                initialRoute={rootRoute}
                configureScene={this.configureScene}
                renderScene={(route,navigator)=>{
                    var Component = route.component;
                    return(
                        <View style={{flex:1}}>//使该组件占满整个屏幕

                            <Component
                             navigator={navigator}
                             rote={route}
                             {...route.passProps}
                            />

                        </View>
                    );
                }}

            />

        );

    };


    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    //
    renderScene(route, navigator) {

        return <route.component navigator={navigator}  {...route.passProps} />;
    }

}

