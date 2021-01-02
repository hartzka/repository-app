import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  error: {
    borderColor: '#d73a4a',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  return <NativeTextInput style={error ? styles.error : styles.textInputStyle} {...props} />;
};

export default TextInput;