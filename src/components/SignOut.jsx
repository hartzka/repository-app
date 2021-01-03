import { useApolloClient } from '@apollo/react-hooks';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthStorageContext from '../contexts/AuthStorageContext';

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient()
  authStorage.removeAccessToken()
  apolloClient.resetStore()

  return <Redirect to='/' />
}

export default SignOut;