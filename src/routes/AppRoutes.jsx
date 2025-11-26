// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import SuspenseWrapper from './SuspenseWrapper';
import { routes } from './RouteConfig';

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<SuspenseWrapper>{route.element}</SuspenseWrapper>} errorElement={route.errorElement} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
