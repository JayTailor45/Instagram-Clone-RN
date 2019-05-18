import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class SplashScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Splash Screen
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

export default SplashScreen;

