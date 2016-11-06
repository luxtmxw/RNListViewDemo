/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var WineListView = require("./WineListView.js");
var ShareListView = require("./ShareListView.js");
var CarListView = require("./CarListView.js");
export default class ListViewDemo extends Component {
  render() {
    return (
      //<WineListView />
      //  <ShareListView />
        <CarListView />
    );
  }
}


AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
