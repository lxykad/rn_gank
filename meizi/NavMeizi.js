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
    ScrollView,
    Navigator,
} from 'react-native';

import MeiZi from './MeiZi';

export default class NavMeizi extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{component: MeiZi}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    renderScene(route, navigator) {

        return <route.component navigator={navigator}  {...route.passProps} />;
    }

}

AppRegistry.registerComponent('NavMeizi', () => NavMeizi);
