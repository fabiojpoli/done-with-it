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
  },
  {
    value: 2,
    label: 'Clothing',
  },
  {
    value: 3,
    label: 'Test',
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
          style={styles.price}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          name='category'
          style={{ width: 120 }}
          style={styles.category}
          placeholder='Category'
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
  price: {
    width: 120,
  },
  category: {
    width: 180,
  },
});

export default ListingEditScreen;
