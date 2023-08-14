import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ShowCreators/>

      },
      {
        path: '/add-creator',
        element:<AddCreator/>
      },
      {
        path: '/edit-creator/:id',
        element:<EditCreator/>
      },
      {
        path: '/view-creator/:id',
        element: <ViewCreator/>
      }
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
