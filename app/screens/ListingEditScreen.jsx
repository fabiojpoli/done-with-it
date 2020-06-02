import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const categories = [
  {
    value: 1,
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65',
  },
  {
    value: 2,
    label: 'Cars',
    icon: 'car',
    backgroundColor: '#fd9644',
  },
  {
    value: 3,
    label: 'Cameras',
    icon: 'camera',
    backgroundColor: '#fed330',
  },
  {
    value: 4,
    label: 'Games',
    icon: 'cards',
    backgroundColor: '#26de81',
  },
  {
    value: 5,
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba',
  },
  {
    value: 6,
    label: 'Sports',
    icon: 'basketball',
    backgroundColor: '#45aaf2',
  },
  {
    value: 7,
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec',
  },
  {
    value: 8,
    label: 'Books',
    icon: 'book-open-variant',
    backgroundColor: '#8a2be2',
  },
  {
    value: 9,
    label: 'Other',
    icon: 'application',
    backgroundColor: '#778899',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name='title' maxLength={255} placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          width={120}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          name='category'
          width={180}
          listNumColumns={3}
          placeholder='Category'
          PickerItemComponent={CategoryPickerItem}
          items={categories}
        />
        <AppFormField
          name='description'
          placeholder='Description'
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton text='Post' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
