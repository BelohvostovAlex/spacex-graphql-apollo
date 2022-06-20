import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query users($limit: Int) {
    users(limit: $limit) {
      id,
      name,
      rocket,
      twitter
    }
  }
`;