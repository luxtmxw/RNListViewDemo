/**
 * Created by luxtmxw on 16/11/6.
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

var ShareData = require('./shareData.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get("window");

var cols = 3;
var cellWH = 100;
var vMargin = (width - cellWH * cols) / (cols + 1);
var hMargin = 25;

var ShareListView = React.createClass({
    getDefaultProps(){
      return{

      }
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        return{
            dataSource: ds.cloneWithRows(ShareData.data)
        }
    },
    render(){
        return(

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.ListViewStyle}
                />



        );
    },

    //返回具体cell
    renderRow(rowData,sectionID,rowID,highlightRow) {
        return(
            <TouchableOpacity>
            <View style={styles.innerViewStyle}>
              <Image key={rowID} source={{uri: rowData.icon}} style={styles.ImageStyle} />
                <Text>{rowData.title}</Text>
            </View>
            </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({

    ListViewStyle:{
        flexDirection:"row",
        flexWrap: "wrap",
        alignItems:'center'

    },

    ImageStyle: {
        width: 80,
        height: 80
    },

    innerViewStyle: {
        width: cellWH,
        height: cellWH,
        marginLeft: vMargin,
        marginTop: hMargin,
        alignItems: 'center'
    }

});

module.exports = ShareListView;