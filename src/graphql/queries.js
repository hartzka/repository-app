import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      pageInfo {hasNextPage}
      edges {
        node {
          id
          fullName
          description
          reviewCount
          ratingAverage
          stargazersCount
          forksCount
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;