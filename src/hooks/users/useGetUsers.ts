import { gql } from '@apollo/client';

import { useQuery } from '@apollo/client';
import { UsersQuery, UsersQueryVariables } from '../../generated/graphql';

export const GET_USERS = gql/* GraphQL */`
  query users($limit: Int) {
    users(limit: $limit) {
      id
      name
      rocket
      twitter
    }
  }
`;

export const useGetUsers = () => {
  const { data, refetch } = useQuery<UsersQuery, UsersQueryVariables>(
    GET_USERS,
    {
      variables: {
        limit: 100,
      },
    }
  );

  return { data, refetch };
};
