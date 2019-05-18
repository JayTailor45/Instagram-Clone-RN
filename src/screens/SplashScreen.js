import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Image, ImageBackground} from 'react-native';

class SplashScreen extends Component {

  render() {
    return (
        <ImageBackground
            style={[styles.container, {width: '100%', height: '100%'}]}
            source={require('../assets/images/instagram-gradient-bg.png')}
        >
          <Image style={styles.instaLogo} source={require('../assets/images/instaLogoWhiteHD.png')}/>
          <ActivityIndicator animating={true} color={'#fff'} size={'large'}/>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaLogo: {
    alignSelf: 'center',
    height: 60,
    width: 200,
    marginBottom: 38
  },
});

export default SplashScreen;

