import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.details}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/user.jpg')}
            title='Fabio Junior Policeno'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetails;
