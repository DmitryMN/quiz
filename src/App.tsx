import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <div>Quiz Element</div>
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
