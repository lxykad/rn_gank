/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

import CommonDetail from '../Common/CommonDetail';

export default class MyAndroid extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds,
            url: 'http://gank.io/api/data/Android/20/1',
            loadSuccess: false,
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
                />

            </View>
        );
    }

    rowItem(rowData) {

        return (

            <TouchableHighlight onPress={()=>this.onItemClick(rowData.url)}>

                <View style={styles.container}>
                    <Text style={styles.titleStyle}>{rowData.desc}</Text>
                </View>

            </TouchableHighlight>

        )

    }

    componentDidMount() {
        //组件挂载后，请求网络数据
        this.loadData();
    }

    loadData() {

        fetch(this.state.url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    loadSuccess: true,
                    dataSource: this.state.dataSource.cloneWithRows(data.results)
                })
            })
            .catch()

    };

    onItemClick(url) {

        this.props.navigator.push(
            {
                component: CommonDetail,
                passProps: {
                    url: url,
                },
            }
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5d5d5',
    },

    titleStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 5,
    }
});

AppRegistry.registerComponent('MyAndroid', () => MyAndroid);