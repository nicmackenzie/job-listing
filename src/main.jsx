import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import NewJob from './pages/NewJob';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// APP ROUTES
// for clarification on how to create routes in version 6,click👉 https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'jobs/new',
        element: <NewJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
