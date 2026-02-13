import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Portifolio from './Portifolio.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx' 

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
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)