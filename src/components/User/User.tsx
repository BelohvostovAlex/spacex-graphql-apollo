import React from 'react';

import { useDeleteUser } from '../../hooks/users/useDeleteUser';
import { useUpdateUser } from '../../hooks/users/useUpdateUser';
import { UserProps } from './interfaces';

export const User: React.FC<UserProps> = ({ id, name, rocket, twitter }) => {
  const { deleteUser } = useDeleteUser();
  const { updateUser } = useUpdateUser();

  const deleteHandler = () => {
    deleteUser({
      variables: {
        where: {
          id: {
            _eq: id,
          },
        },
      },
    });
  };

  const updateHandler = () => {
    updateUser({
      variables: {
        _set: {
          name: 'Johnny',
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
  };

  return (
    <div className="userCard">
      <h2>{name}</h2>
      <p>{rocket}</p>
      <p>{twitter}</p>
      <button onClick={deleteHandler}>delete user</button>
      <button onClick={updateHandler}>update user</button>
    </div>
  );
};
