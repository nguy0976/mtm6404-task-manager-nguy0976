import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import About from './components/About'
import List from './components/List'
import ListDetail from './components/ListDetail'
import List1 from './components/List1'
import List2 from './components/List2'
import List3 from './components/List3'
import List4 from './components/List4'
import List5 from './components/List5'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/detail",
    element: <ListDetail />,
  },
  {
    path: "/list1",
    element: <List1 />,
  },
  {
    path: "/list2",
    element: <List2 />,
  },
  {
    path: "/list3",
    element: <List3 />,
  },
  {
    path: "/list4",
    element: <List4 />,
  },
  {
    path: "/list5",
    element: <List5 />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

