import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './App.css';
import HomePage from './pages/homepage.jsx';
import ServicePage from './pages/services.jsx';
import NotFound from './pages/404.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App pages={<HomePage/>}/>
  },
  {
    path: '/service',
    element: <App pages={<ServicePage/>}/>
  },
  {
    path: '*',
    element: <App pages={<NotFound/>} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)