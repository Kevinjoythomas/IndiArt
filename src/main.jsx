import React from 'react';
import { ReactDOM } from 'react-dom/client';
import App from './App.js';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "navbar",
                element: <Navbar/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );