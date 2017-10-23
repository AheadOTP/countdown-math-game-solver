import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class GivenNumbers extends Component {

    onPressButton(i) {
      console.log(i);
    }

    render() {
      return (
        <View style={styles.cellsStyle}>
          <TouchableHighlight
            onPress={this.onPressButton(0)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPressButton(1)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPressButton(2)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPressButton(3)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPressButton(4)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onPressButton(5)}
            style={this.targetNumCellStyle}
          >
            <Text />
          </TouchableHighlight>
        </View>
      );
    }
}

const styles = {
  targetNumCellStyle: {
    backgroundColor: '#C6C7C9'
  },
  cellsStyle: {
    flexDirection: 'row',
    flex: 1
  }

};

export default GivenNumbers;
