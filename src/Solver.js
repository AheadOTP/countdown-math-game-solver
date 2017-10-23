import React, { Component } from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';
import GivenNumbers from './GivenNumbers';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Solver extends Component {
  state = { targetNum: '', numbers: [] };

  render() {
    return (
      <View>
        <Text>Target number:</Text>
        <TextInput
          value={this.state.targetNum}
          editable={false}
          style={styles.targetInputStyle}
        />
        <View style={styles.numBoardStyle}>
            <GivenNumbers />
        </View>
      </View>
    );
  }
}

const styles = {
  targetInputStyle: {
    height: 100,
    width: SCREEN_WIDTH,
    backgroundColor: '#202020'
  },
  numBoardStyle: {
    height: 100
  },
  calculatorStyle: {

  }

};

export default Solver;
