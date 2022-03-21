import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import routePaths from './routePaths';

const Routing = () => {
  let isAuthenticated = true;
  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  let element = useRoutes(routePaths);

  return element;
};

export default Routing;
