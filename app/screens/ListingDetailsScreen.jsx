import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint='light'
        uri={listing.images[0].url}
      />
      <View style={styles.details}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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

export default ListingDetailsScreen;
