import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ROCKET } from './graphql/queries/getRocket';
import { RocketBlock } from './components/RocketBlock';
import { RocketsQuery, RocketsQueryVariables } from './generated/graphql';

export const App = () => {
  const { data, loading } = useQuery<RocketsQuery, RocketsQueryVariables>(
    GET_ROCKET,
    {
      variables: {
        limit: 4,
      },
    }
  );

  return (
    <div className="app">
      {data?.rockets &&
        data.rockets.map((rocket) => (
          <RocketBlock
            key={rocket?.id}
            name={rocket?.name}
            description={rocket?.description}
            engines={rocket?.engines}
            type={rocket?.type}
          />
        ))}
    </div>
  );
};
