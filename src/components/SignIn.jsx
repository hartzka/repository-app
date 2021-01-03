import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import { FormikTextInput, FormikSecureTextInput } from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const styles = StyleSheet.create({
  submit: {
    margin: 10,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color:'#fff',
    textAlign:'center',
  }
});

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View>
      <FormikTextInput
        testID='usernameField'
        name='username'
        placeholder='Username'
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
      />
      <FormikSecureTextInput
        testID='passwordField'
        name='password'
        placeholder='Password'
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
      />
      <TouchableHighlight
         testID='submitButton'
         style={styles.submit}
         onPress={onSubmit}
      >
        <Text style={styles.submitText}>Sign in</Text>
      </TouchableHighlight>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}  
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit}></SignInContainer>
  );
};

export default SignIn;