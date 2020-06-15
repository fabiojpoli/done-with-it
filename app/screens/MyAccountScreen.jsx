import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    targetScreen: routes.MESSAGES,
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/user.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor={colors.warning} />}
        onPress={handleLogOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;
