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

var BaseListView = require("./BaseListView.js");
export default class ListViewDemo extends Component {
  render() {
    return (
        <BaseListView />
    );
  }
}


AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
