import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import CreatePost from "../components/createPost.jsx";
import PostList from "../components/postList.jsx";

import {RouterProvider , createBrowserRouter  } from "react-router-dom";


  const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createpost",
    element: <CreatePost />,
  },
  {
    path: "/postslist",
    element: <PostList />,
  },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
