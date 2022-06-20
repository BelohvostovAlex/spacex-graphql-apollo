import React from 'react';

import { useQuery } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { RocketBlock } from '../../components/RocketBlock/RocketBlock';
import { RocketsQuery, RocketsQueryVariables } from '../../generated/graphql';
import { GET_ROCKETS } from '../../graphql/queries/getRockets';

import './styles.css';

export const Main: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading } = useQuery<RocketsQuery, RocketsQueryVariables>(
    GET_ROCKETS,
    {
      variables: {
        limit: 4,
      },
    }
  );

  const handleSingleRocketPage = (id: string) => {
    navigate(`/rockets/${id}`);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="main">
      {data?.rockets &&
        data.rockets.map((rocket) => (
          <RocketBlock
            key={rocket?.id}
            id={rocket?.id}
            name={rocket?.name}
            description={rocket?.description}
            engines={rocket?.engines}
            type={rocket?.type}
            onClick={handleSingleRocketPage}
          />
        ))}
      <Link to={'/users'}>Go to users page</Link>
    </div>
  );
};
