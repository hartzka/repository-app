import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import { FormikTextInput, FormikSecureTextInput } from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

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
        name='username'
        placeholder='Username'
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
      />
      <FormikSecureTextInput
        name='password'
        placeholder='Password'
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
      />
      <TouchableHighlight style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Sign in</Text>
      </TouchableHighlight>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}  
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;