import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  item: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '33%',
  },
});

export default CategoryPickerItem;
