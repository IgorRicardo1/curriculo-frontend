import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portifolio from './Portifolio';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portifolio />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;