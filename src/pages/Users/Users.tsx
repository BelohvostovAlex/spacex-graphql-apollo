import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/queries/getUsers';
import {
  Insert_UsersMutationResult,
  Insert_UsersMutationVariables,
  UsersQuery,
  UsersQueryVariables,
  Users_Mutation_Response,
} from '../../generated/graphql';
import { DELETE_USER } from '../../graphql/mutations/deleteUser';
import { UPDATE_USER } from '../../graphql/mutations/updateUser';
import { CREATE_USER } from '../../graphql/mutations/createUser';

export const Users: React.FC = () => {
  const { data, refetch } = useQuery<UsersQuery, UsersQueryVariables>(
    GET_USERS,
    {
      variables: {
        limit: 10,
      },
    }
  );

  const [deleteUser, { data: removedData }] =
    useMutation<Users_Mutation_Response>(DELETE_USER);

  const [updateUser, { data: updatedData }] =
    useMutation<Users_Mutation_Response>(UPDATE_USER);

  const [createUser, { data: insertedData }] = useMutation<
    Insert_UsersMutationResult,
    Insert_UsersMutationVariables
  >(CREATE_USER);

  if (!data?.users) {
    return null;
  }

  const deleteUserHandler = (id: string) => {
    deleteUser({
      variables: {
        where: {
          id: {
            _eq: id,
          },
        },
      },
    });
    console.log(removedData);
  };

  const updateUserHandler = (id: string) => {
    updateUser({
      variables: {
        _set: {
          name: 'Alex',
          rocket: 'FlashRocket',
          twitter: 'asdas',
        },
        where: {
          id: {
            _eq: id,
          },
        },
      },
    });
    console.log(updatedData);
  };

  const createUserHandler = () => {
    createUser({
      variables: {
        objects: [
          {
            name: 'Johhny',
            rocket: 'Cocket',
            twitter: 'shmitter',
          },
        ],
      },
    });
    console.log(insertedData);
  };

  const getAllUsersHandler = () => {
    refetch();
  };

  return (
    <div className="usersWrapper">
      {data.users.map((user) => (
        <div className="userCard" key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.rocket}</p>
          <p>{user.twitter}</p>
          <button onClick={() => deleteUserHandler(user.id)}>
            delete user
          </button>
          <button onClick={() => updateUserHandler(user.id)}>
            update user
          </button>
        </div>
      ))}
      <button onClick={createUserHandler}>create user</button>
      <button onClick={getAllUsersHandler}>get all users</button>
    </div>
  );
};
