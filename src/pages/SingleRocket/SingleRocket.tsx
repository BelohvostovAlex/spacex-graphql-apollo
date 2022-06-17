import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_ROCKET } from '../../graphql/queries/getRocket';
import { Link, useParams } from 'react-router-dom';
import { RocketQuery, RocketQueryVariables } from '../../generated/graphql';

import './styles.css';

export const SingleRocket: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<RocketQuery, RocketQueryVariables>(
    GET_ROCKET,
    {
      variables: {
        id: id!,
      },
    }
  );

  if (!data?.rocket) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleRocketWrapper">
      <h2 className="rocketTitle">{data.rocket.name}</h2>
      <p>Diameter: {data.rocket.diameter?.meters} m</p>
      <p>First flight: {data.rocket.first_flight}</p>
      <p>
        First Stage:{' '}
        <span>burn time - {data.rocket.first_stage?.burn_time_sec} sec; </span>
        <span>
          fuel amount - {data.rocket.first_stage?.fuel_amount_tons} tons;
        </span>
        <span> engines - {data.rocket.first_stage?.engines};</span>
      </p>
      <p>Height: {data.rocket.height?.meters} m</p>
      <p>Mass: {data.rocket.mass?.kg} kg</p>
      <p className="rocketPayloadWrapper">
        Payload weights:
        {data.rocket.payload_weights?.map((item) => {
          return (
            <span className="rocket-payload" key={item?.id}>
              {item?.id}: {item?.name} {item?.kg}
            </span>
          );
        })}
      </p>
      <Link to={'/'}>back to the main</Link>
    </div>
  );
};
