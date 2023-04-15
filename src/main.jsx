import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics';
import Error from './Components/Error';
import Section from './Components/Section';
import Blogs from './Components/Blogs';
import JobCate from './Components/JobCate';
import View from './Components/View';
import Apple from './Components/Apple';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Section />,
        loader: () => fetch('jobcata.json'),



      },
      {
        path: "/view",
        element: <View />,
        loader: () => fetch('features.json'),

      },
      {
        path: "/blog",
        element: <Blogs />

      },
      ,
      {
        path: "/apple",
        element: <Apple />,
        loader: () => fetch('features.json'),

      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('Assignment.json')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
