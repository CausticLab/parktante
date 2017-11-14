/**
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PlateRecognizer from './PlateRecognizer';
import KeepAwake from 'react-native-keep-awake';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <PlateRecognizer />
        <KeepAwake />
      </View>
    );
  }
}
