import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';

import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectDetail from './pages/projects/ProjectDetail.jsx';

import App from './App.jsx'
import '../src/styles/main.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:projectId', element: <ProjectDetail /> },
      { path: '/experience', element: <Experience /> },
      { path: '/about', element: <About /> },
      { path: '/certificates', element: <Certificates /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
