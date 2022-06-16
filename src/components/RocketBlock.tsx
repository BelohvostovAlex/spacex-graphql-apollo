import React from 'react';

import { Rocket } from '../generated/graphql';

import './styles.css';

export const RocketBlock: React.FC<Rocket> = ({
  name,
  description,
  type,
  engines,
}) => {
  return (
    <div className="rocketCard">
      <h1>
        Type: {type} - {name}
      </h1>
      <p>{description}</p>
      <div className="rocketEnginesWrapper">
        <div>{engines?.type}</div>
        <div>{engines?.version ? engines?.version : 'no version'}</div>
      </div>
    </div>
  );
};
