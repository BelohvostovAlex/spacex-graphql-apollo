import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { RocketsQuery, RocketsQueryVariables } from '../../generated/graphql';

export const GET_ROCKETS = gql/* GraphQL */`
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

export const useGetRockets = () => {
  const { data, loading } = useQuery<RocketsQuery, RocketsQueryVariables>(
    GET_ROCKETS,
    {
      variables: {
        limit: 4,
      },
    }
  );
  return { data, loading };
};
