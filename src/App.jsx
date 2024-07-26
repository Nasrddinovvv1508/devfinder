import { Button } from '@material-tailwind/react'
// components
import { Navbar } from './components'

// react router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// pages
import { Home, SeeMore } from './pages'

// layouts
import MainLayout from './layout/MainLayout'

function App() {
  let routes = createBrowserRouter([{
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: `/seemore/:username`,
        element: <SeeMore />
      }
    ]
  }])

  return <RouterProvider router={routes} />
}

export default App