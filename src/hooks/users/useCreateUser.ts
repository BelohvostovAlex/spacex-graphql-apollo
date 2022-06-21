import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

import {
  Insert_UsersMutationResult,
  Insert_UsersMutationVariables,
} from '../../generated/graphql';

const CREATE_USER = gql/* GraphQL */`
  mutation insert_users($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;

export const useCreateUser = () => {
  const [createUser, { data }] = useMutation<
    Insert_UsersMutationResult,
    Insert_UsersMutationVariables
  >(CREATE_USER);

  return { createUser, data };
};
