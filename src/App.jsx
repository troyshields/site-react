import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import Layout from './Layout'
import NotFoundPage from './pages/NotFoundPage'
import Assembly from './projects/Assembly'
import Tenzies from './projects/Tenzies'
import Meme from './projects/Meme'
import RecipeGenerator from './projects/RecipeGenerator'
import Pads from './projects/Pads'
import TemperatureConversion from './projects/TemperatureConversion'
import UserList from './projects/UserList'
import StopWatch from './projects/StopWatch'
import ContactPage from './pages/ContactPage'

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage/>,
  children: [{
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/projects',
    element: <ProjectsPage/>
  },
  {
    path: '/contact',
    element: <ContactPage/>
  },
  {
    path: '/project-assembly',
    element: <Assembly/>
  },
  {
    path: '/project-tenzies',
    element: <Tenzies/>
  },
  {
    path: '/project-meme',
    element: <Meme/>
  },
  {
    path: '/project-recipe',
    element: <RecipeGenerator/>
  },
  {
    path: '/project-pads',
    element: <Pads/>
  },
  {
    path: '/project-temperature',
    element: <TemperatureConversion/>
  },
  {
    path: '/project-userlist',
    element: <UserList/>
  },
  {
    path: '/project-stopwatch',
    element: <StopWatch/>
  }]

}]

const router = createBrowserRouter(routes)

export default function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}