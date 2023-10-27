import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Play from './components/Play';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/play',
    element: <Play />
  },
  {
    path: '/result',
    element: <div>Result Element</div>
  },
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
