import { gql } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { Users_Mutation_Response } from '../../generated/graphql';

export const UPDATE_USER = gql/* GraphQL */`
  mutation update_users($_set: users_set_input, $where: users_bool_exp!) {
    update_users(_set: $_set, where: $where) {
      returning {
        id
        name
        rocket
        timestamp
      }
    }
  }
`;

export const useUpdateUser = () => {
  const [updateUser, { data }] =
    useMutation<Users_Mutation_Response>(UPDATE_USER);

  return { updateUser, data };
};
