import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  style,
  IconComponent,
  showChevrons = true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.container, style]}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name='chevron-right'
              size={30}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
