import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 15,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/' component={TouchableOpacity} activeOpacity={0.8}><Text color='white'>Repositories</Text></Link>
          <Link to='/signin' component={TouchableOpacity} activeOpacity={0.8}><Text color='white'>Sign in</Text></Link>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default AppBar;