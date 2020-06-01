import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.closeIcon} name='close' />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name='trash-can-outline'
      />
      <Image
        style={styles.image}
        source={require('../assets/chair.jpg')}
      ></Image>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    color: colors.white,
    fontSize: 24,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    color: colors.white,
    fontSize: 24,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});
