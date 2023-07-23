import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@/Routes';
// import GlobalStyle from './GlobalStyle';

export default function App() {
  const elem = useRoutes(routes);

  return (
    <>
      {elem}
    </>
    
  );
}