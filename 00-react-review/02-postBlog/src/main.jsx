import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as jsonPostsLoader } from '../routes/posts.jsx'
import './index.css'

import CreatePost,{action} from "../routes/createPost.jsx";
import PostList from "../components/postList.jsx";
import MainLayout from "../routes/mainLayout.jsx";
import Home from "../components/home.jsx";

import {RouterProvider , createBrowserRouter  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts",
          element: <Posts />,
          children: [],
          loader: jsonPostsLoader,
        },
        {path: "/create-post",element: <CreatePost />, action:action},
   
        {
          path: "/postslist",
          element: <PostList />,
        },
      ],
    },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
