/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';


import MeiZiDetail from './MeiZiDetail';

const App = StackNavigator({
    //MeiZi: {screen: MeiZi},
    MeiZiDetail: {screen: MeiZiDetail},
});

export default class MeiZi extends Component {

    static propTypes = {}//props校验

    static defaultProps = {}//默认props

    totalList = [];

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            url: 'http://gank.io/api/data/福利/10/1',
            loadSuccess: false,
            isLoadingMore: false,
            url2: 'http://gank.io/api/data/福利/10/2',

        }
    }

    render() {

        if (!this.state.loadSuccess) {
            return <Text>loading</Text>
        }


        return (

            <View >

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.rowItem(rowData)}
                    onEndReached={()=>this.onLoadMore()}
                />

            </View>
        );
    }

    componentDidMount() {
        //组件挂载后，请求网络数据
        this.loadData(this.state.url);
    }

    loadData(url) {

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.totalList = data.results;

                this.setState({
                    loadSuccess: true,
                    dataSource: this.state.dataSource.cloneWithRows(this.totalList),
                })
            })
            .catch()

    };

    //分页
    onLoadMore() {
        //alert("loadMore")
        fetch(this.state.url2)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let list = data.results;

                for (var i = 0; i < list.length; i++) {
                    this.totalList.push(list[i]);
                }

                this.setState({
                    loadSuccess: true,
                    dataSource: this.state.dataSource.cloneWithRows(this.totalList)
                })
            })
            .catch()
    }


    rowItem(rowData) {

        return (

            <TouchableHighlight onPress={()=>this.onItemClick(rowData.url)}>

                <View style={styles.container}>
                    <Text style={styles.titleStyle}>{rowData.desc}</Text>
                    <Image source={{uri:rowData.url}} style={styles.imageStyle}/>
                </View>

            </TouchableHighlight>

        )

    }

    onItemClick(url) {

        this.props.navigator.push(
            {
                component: MeiZiDetail,
                passProps: {
                    url: url
                },
            }
        )
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
AppRegistry.registerComponent('MeiZi', () => MeiZi);