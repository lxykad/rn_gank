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
    ListView
} from 'react-native';

var ITEM_COUNT = 20;

export default class MeiZi extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ]),
            url: 'http://gank.io/api/data/福利/10/1',
        }
    }

    render() {

        return (
            <View >


                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=><Text>{rowData}</Text>}
                />


            </View>
        );
    }



    loadData() {
        fetch(this.url).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBEB',
    },
    content: {
        width: 100,
        height: 100,
        backgroundColor: '#39c6c1'
    }
});
AppRegistry.registerComponent('MeiZi', () => MeiZi);