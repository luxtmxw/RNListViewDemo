/**
 * Created by luxtmxw on 16/11/5.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var Wine = require('./Wine.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get("window");

var WineListView = React.createClass({
    getInitialState(){
        //1.1设置dataSource
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(Wine)
        }

    },

    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>


        );
    },

    //返回具体cell
    renderRow(rowData,sectionID,rowID,highlightRow) {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert(rowID)}}>
            <View style={styles.CellStyle}>
                <Image key={rowID} source={{uri: rowData.image}} style={styles.leftImageStyle} />
                <View style={styles.RightViewStyle}>
                    <Text style={styles.TopTextStyle}>{rowData.name}</Text>
                    <Text style={styles.BottomTextStyle}>¥{rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({
    CellStyle: {
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "#dfdfdf",
        flexDirection: "row",
        padding: 10
        //marginBottom: 15
    },

    leftImageStyle: {
        width:60,
        height:60,
        marginRight: 10
    },

    RightViewStyle: {
        justifyContent: 'center'
    },

    TopTextStyle: {
        color: '#ff9900',
        width: width*0.7,
        marginBottom: 5
        //marginTop: 15
    },

    BottomTextStyle: {

    }
});

module.exports = WineListView;