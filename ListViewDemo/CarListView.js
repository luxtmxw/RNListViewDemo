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

var Car = require('./Car.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get("window");

var CarListView = React.createClass({
    getDefaultProps(){
        return{

        }
    },

    getInitialState(){
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };


        return{
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1,r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1,s2) => s1 !== s2
            })
        }
    },

    render(){
        return(

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.ListViewStyle}
                renderSectionHeader={this.renderSectionHeader}
            />



        );
    },

    componentDidMount() {
      this.loadDataFromJson();
    },

    loadDataFromJson() {
        var jsonData = Car.data;
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];

        for(var i = 0; i < jsonData.length; i++) {
            sectionIDs.push(i);

            dataBlob[i] = jsonData[i].title;

            cars = jsonData[i].cars;

            rowIDs[i] = [];
            for(var j = 0; j < cars.length; j++) {
                rowIDs[i].push(j);
                dataBlob[i+':'+j] = cars[j];
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });

    },

    //返回具体cell
    renderRow(rowData,sectionID,rowID,highlightRow) {
        return(
            <TouchableOpacity>
            <View style={styles.cellStyle}>
                <Image source={{uri: rowData.icon}} style={styles.IconStyle} />
                <Text style={{marginLeft: 10}}>{rowData.name}</Text>
            </View>
            </TouchableOpacity>
        );
    },

    renderSectionHeader(sectionData){
        return(
            <View style={styles.sectionStyle}>
                <Text style={{color:'#333333', marginLeft: 10, fontSize:19 }}>{sectionData}</Text>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    cellStyle: {
        height: 100,
        flexDirection: 'row',
        alignItems:"center",
        borderBottomWidth:0.5,
        borderBottomColor: '#dfdfdf'

    },

    sectionStyle: {
        height: 25,
        justifyContent:'center',
        backgroundColor:'#dfdfdf'
    },

    IconStyle: {
        height: 80,
        width: 80
    }


});

module.exports = CarListView;