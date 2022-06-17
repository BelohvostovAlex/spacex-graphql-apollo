import React from 'react';

import { RocketBlockProps } from './interfaces';

import './styles.css';

export const RocketBlock: React.FC<RocketBlockProps> = ({
  id,
  name,
  description,
  type,
  engines,
  onClick,
}) => {
  const handleSingleRocketPage = () => {
    onClick(id!);
  };

  return (
    <div className="rocketCard" onDoubleClick={handleSingleRocketPage}>
      <h2>
        Type: {type} - {name}
      </h2>
      <p>{description}</p>
      <div className="rocketEnginesWrapper">
        <div>{engines?.type}</div>
        <div>{engines?.version ? engines?.version : 'no version'}</div>
      </div>
    </div>
  );
};
