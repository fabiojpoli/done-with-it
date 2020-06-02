import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  valueField = 'value',
  labelField = 'label',
  style,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={selectedItem ? styles.text : styles.placeholder}>
            {selectedItem ? selectedItem[labelField] : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item[valueField].toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item[labelField]}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
