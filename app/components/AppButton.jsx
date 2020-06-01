import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

function AppButton({ text, style, color = 'primary', onPress }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...style,
        ...{ backgroundColor: colors[color] },
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
