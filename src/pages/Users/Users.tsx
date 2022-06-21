import React from 'react';

import { useGetUsers } from '../../hooks/users/useGetUsers';
import { useCreateUser } from '../../hooks/users/useCreateUser';
import { User } from '../../components/User/User';

export const Users: React.FC = () => {
  const { data, refetch } = useGetUsers();

  const { createUser, data: createdData } = useCreateUser();

  if (!data?.users) {
    return null;
  }

  const createUserHandler = () => {
    createUser({
      variables: {
        objects: {
          name: 'Alex',
          rocket: 'Pocket 2000',
          twitter: 'Shmitter',
        },
      },
    });
    console.log(createdData);
  };

  const getAllUsersHandler = () => {
    refetch();
    console.log(data);
  };

  return (
    <div className="usersWrapper">
      {data.users.map(({ id, name, rocket, twitter }) => (
        <User
          key={id}
          name={name!}
          rocket={rocket!}
          twitter={twitter!}
          id={id}
        />
      ))}
      <button onClick={createUserHandler}>create user</button>
      <button onClick={getAllUsersHandler}>get all users</button>
    </div>
  );
};
