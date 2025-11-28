import { lazy } from 'react';
import RouteError from './RouteError';

const Home = lazy(() => import('../pages/home'));
const Campaigns = lazy(() => import('../pages/campaigns'));
const About = lazy(() => import('../pages/about'));
const Projects = lazy(() => import('../pages/projects'));

export const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    path: '/kampanyalar',
    element: <Campaigns />,
    errorElement: <RouteError />,
  },
  {
    path: '/hakkimizda',
    element: <About />,
    errorElement: <RouteError />,
  },
  {
    path: '/projeler',
    element: <Projects />,
    errorElement: <RouteError />,
  },
];
