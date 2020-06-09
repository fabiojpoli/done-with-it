import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <AppButton
        text='Login'
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <AppButton
        text='Register'
        color='secondary'
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
