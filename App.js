import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Solver from './src/Solver';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Solver />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#686868',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
});
