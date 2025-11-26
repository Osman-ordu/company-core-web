import { lazy } from 'react';
import RouteError from './RouteError';

const Home = lazy(() => import('../pages/home/HomePage'));
const Campaigns = lazy(() => import('../pages/campaigns'));

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
];
