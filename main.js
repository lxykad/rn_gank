/**
 * Created by lxy on 2017/3/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import MeiZi from './meizi/MeiZi';
import MyAndroid from './myAndroid/MyAndroid';
import MyIos from './myIos/MyIos';
import MyH5 from './myH5/MyH5';
import MyVideo from './video/MyVideo';
import NavMeizi from './meizi/NavMeizi';

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTab: '妹子',
        }
    }

    //<MeiZi sex="3"/>
    render() {
        return (
            <TabNavigator>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '妹子'}
                    title="妹子"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./drawable/me_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./drawable/meizi.png")} />}
                    onPress={() => this.setState({ selectedTab: '妹子' })}>
                    <NavMeizi/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'android'}
                    title="android"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./drawable/me_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./drawable/android.png")} />}
                    onPress={() => this.setState({ selectedTab: 'android' })}>
                    <MyAndroid/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'ios'}
                    title="ios"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./drawable/me_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./drawable/ios.png")} />}
                    onPress={() => this.setState({ selectedTab: 'ios' })}>
                    <MyIos/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '前端'}
                    title="前端"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./drawable/me_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./drawable/h5.png")} />}
                    onPress={() => this.setState({ selectedTab: '前端' })}>
                    <MyH5/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '休息视频'}
                    title="休息视频"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./drawable/me_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./drawable/video.png")} />}
                    onPress={() => this.setState({ selectedTab: '休息视频' })}>
                    <MyVideo/>
                </TabNavigator.Item>

            </TabNavigator>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        color: "#999999",
        fontSize: 14
    },
    selectedTabText: {
        color: "#39c6c1",
        fontSize: 14
    },
    icon: {
        width: 25,
        height: 25
    }
});

AppRegistry.registerComponent('Main', () => Main);
