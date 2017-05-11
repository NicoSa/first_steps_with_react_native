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
import HelloWorld from './App/components/helloWorld'

export default class AwesomeProject extends Component {
  render() {
    return (
      <HelloWorld />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
