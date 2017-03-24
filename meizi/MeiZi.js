/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var ITEM_COUNT = 20;

export default class MeiZi extends Component {

    statics: {
        title: '<ScrollView>',
        description: 'Component that enables scrolling through child components.'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired,//表示必须传递
    }

    static defaultProps = {
        name: '美女',
        chui: '变大',
        fang: '变小'
    }

    constructor(props) {
        super(props)

        this.state = {
            size: 50
        }

        var url: "http://gank.io/api/data/福利/10/1";
    }

    render() {

        return (
            <View >

                <Text style={styles.content} onPress={()=>this.setState({size:this.state.size+10})}>
                    {this.props.chui}
                </Text>

                <Text style={{height:100,width:100,backgroundColor:'#00ff00'}}
                      onPress={()=>{this.setState({size:this.state.size-10})}}>
                    {this.props.fang}
                </Text>

                <Text style={{width:this.state.size,height:this.state.size,backgroundColor:'#ff0000'}}>
                    {this.props.name}
                </Text>

            </View>
        );
    }

    getName() {
        return this.state.size;
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