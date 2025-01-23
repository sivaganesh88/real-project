import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checked from './Checked';
import Error from './Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define your routes using `createBrowserRouter`
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Specify the error boundary
    children: [
      {
        path: "checked",
        element: <Checked />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="w-screen h-screen flex justify-center items-center">
    <RouterProvider router={router} /> {/* Use RouterProvider */}
  </div>
);
