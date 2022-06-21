import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { RocketQuery, RocketQueryVariables } from '../../generated/graphql';

export const GET_ROCKET = gql/* GraphQL */`
  query rocket($id: ID!) {
    rocket(id: $id) {
      id
      first_flight
      first_stage {
        burn_time_sec
        engines
        fuel_amount_tons
        reusable
      }
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
      payload_weights {
        id
        kg
        name
      }
    }
  }
`;

export const useGetRocket = (id: string) => {
  const { data, loading } = useQuery<RocketQuery, RocketQueryVariables>(
    GET_ROCKET,
    {
      variables: {
        id: id!,
      },
    }
  );

  return { data, loading };
};
