import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element</div>
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


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
