import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground} from 'react-native';

import {Input, Item} from 'native-base'

class Login extends Component {

  render() {
    return (
        <ImageBackground
            style={[styles.container, {width: '100%', height: '100%'}]}
            source={require('../assets/images/instagram-gradient-bg.png')}
        >
          <Image style={styles.instaLogo} source={require('../assets/images/instaLogoWhiteHD.png')}/>

          <View style={{alignItems: 'center'}}>
            <Item style={styles.inputContainer}>
              <Input
                  placeholder={'Email'}
                  placeholderTextColor={'#fff'}
                  style={{ color: '#fff'}}/>
            </Item>
            <Item style={styles.inputContainer}>
              <Input
                  secureTextEntry={true}
                  placeholder={'Password'}
                  placeholderTextColor={'#fff'}
                  style={{ color: '#fff'}}/>
            </Item>
            <TouchableOpacity style={{ width: '90%' }}onPress={() => {}}>
              <View style={styles.lgButtonContainer}>
                <Text style={{color: '#fff'}}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={{color: '#fff'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={{marginStart: 16, fontWeight: '600', color: '#fff'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instaLogo: {
    marginTop: 150,
    alignSelf: 'center',
    height: 60,
    width: 200,
    marginBottom: 50
  },
  inputContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff10',
    borderRadius: 5,
    paddingStart: 16,
    width: '90%',
    marginTop: 16
  },
  lgButtonContainer: {
    marginTop: 16,
    borderColor: '#ffffff20',
    borderRadius: 5,
    padding: 16,
    borderWidth: 1,
    alignItems: 'center'
  },
  signupContainer: {
    height: 80,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#ffffff20',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;