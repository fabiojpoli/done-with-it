import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import {
  ErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from '../components/forms';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';
import logger from '../utility/logger';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError('An unexpected error ocurred');
        logger.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
