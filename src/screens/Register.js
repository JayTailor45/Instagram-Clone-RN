import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Register extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Register Screen
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default Register;