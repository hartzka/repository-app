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

export const GET_REPOSITORY = gql `
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      reviewCount
      ratingAverage
      stargazersCount
      forksCount
      language
      ownerAvatarUrl
      url
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