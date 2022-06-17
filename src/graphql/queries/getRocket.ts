import { gql } from '@apollo/client';

export const GET_ROCKET = gql`
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
