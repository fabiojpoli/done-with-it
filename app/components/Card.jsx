import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={1}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  details: {
    padding: 20,
  },
  image: {
    height: 200,
    width: '100%',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
