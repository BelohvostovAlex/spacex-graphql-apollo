import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { SingleRocket } from '../../pages/SingleRocket/SingleRocket';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/rockets/:id" element={<SingleRocket />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
