import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import NewJob from './pages/NewJob';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { AppProvider } from './context/app-context';
import JobDetails from './components/JobDetails';
import NotFound from './components/ui/Page-not-found';

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
      {
        path: 'jobs/:id',
        element: <JobDetails />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
