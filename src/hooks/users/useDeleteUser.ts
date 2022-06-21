import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

import { Users_Mutation_Response } from '../../generated/graphql';

const DELETE_USER = gql/* GraphQL */`
  mutation delete_users($where: users_bool_exp!) {
    delete_users(where: $where) {
      returning {
        name
        id
      }
    }
  }
`;

export const useDeleteUser = () => {
  const [deleteUser, { data }] =
    useMutation<Users_Mutation_Response>(DELETE_USER);

  return { deleteUser, data };
};
