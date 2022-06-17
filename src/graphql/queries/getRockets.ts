import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
  query rockets($limit: Int) {
    rockets(limit: $limit) {
      id
      company
      description
      engines {
        type
        version
      }
      name
      type
    }
  }
`;
