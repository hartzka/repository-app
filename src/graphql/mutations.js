import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;