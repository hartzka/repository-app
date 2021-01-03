import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations'
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-dom";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient()
  let history = useHistory();

  const signIn = async ({ username, password }) => {
    const data = await mutate({ variables: { credentials: { username, password } } })
    await authStorage.setAccessToken(data?.data.authorize.accessToken);
    apolloClient.resetStore();
    history.push('/')
    return data;
  };
  return [signIn, result];
};

export default useSignIn;