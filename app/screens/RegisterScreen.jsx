import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton, AppForm } from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='name'
          autoCorrect={false}
          icon='account'
          placeholder='Name'
        />
        <AppFormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton text='Register' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
