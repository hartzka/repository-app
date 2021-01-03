import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect, useParams } from 'react-router-native';
import SignIn from './SignIn';
import SignOut from './SignOut'
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Repository = () => {
  const { id } = useParams();   
  const { data, loading } = useRepository(id);
  const item = data?.repository;
  
  if (loading) {
    return null
  }
  return (
    <RepositoryItem
      openButton={true}
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      rating={item.ratingAverage}
      image={item.ownerAvatarUrl}
      url={item.url}
    />
  )
}

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/repository/:id">
          <Repository />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signout" exact>
          <SignOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;