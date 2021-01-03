import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import { Link } from "react-router-native";
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
  const authStorage = useContext(AuthStorageContext);
  const token = authStorage.getAccessToken();
  const { data, error, loading } = useQuery(AUTHORIZED_USER, {
    context: {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
  });
  console.log(data)
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/' component={TouchableOpacity} activeOpacity={0.8}><Text color='white'>Repositories</Text></Link>
          {data?.authorizedUser ? 
            <Link to='/signout' component={TouchableOpacity} activeOpacity={0.8}><Text color='white'>Sign out</Text></Link> :
            <Link to='/signin' component={TouchableOpacity} activeOpacity={0.8}><Text color='white'>Sign in</Text></Link>
          }
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default AppBar;