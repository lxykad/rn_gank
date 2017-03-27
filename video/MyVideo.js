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
    ListView
} from 'react-native';

export default class MyVideo extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //设置DataSource时，不直接使用原始数据.当原始数据发生改变时，DataSource不会发生改变。
            dataSource: ds,
            url: 'http://gank.io/api/data/福利/10/1',
            meizis: [],
            loadSuccess: false,
        }
    }

    render() {


        if (!this.state.loadSuccess) {

            return (
                <View>
                    <Text style={styles.textStyle} onPress={()=>{this.loadData()}}>获取数据</Text>
                    <Text>加载中 loading...</Text>
                </View>
            );
        }


        return (
            //renderRow={(rowData)=><Text style={styles.rowStyle}>{rowData._id}</Text>}
            <View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=> <Image source={{uri:rowData.url}} style={styles.imageStyle}/>}
                />

            </View>


        );
    }

    componentDidMount() {
        //组件挂载后，请求网络数据
        this.loadData();
    }

    // dataSource: this.state.dataSource.cloneWithRows(responseData.results)
    loadData() {
        fetch(this.state.url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    loadSuccess: true,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.results)

                });
                //请求数据成功，更新datasou

                console.log("==========" + responseData.results);
            })
            .catch((error) => {
                console.log("======error====" + error);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        color: "#999999",
        fontSize: 14,
        width: 80,
        height: 80,
        backgroundColor: '#39c6c1',
    },
    listStyle: {
        marginTop: 10
    },
    rowStyle: {
        width: '100%',
        backgroundColor: '#d1d1d1',
        height: 80,
        borderBottomColor: '#ff0000',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    imageStyle: {
        width: '100%',
        height: 200,
    }

});

AppRegistry.registerComponent('MyVideo', () => MyVideo);