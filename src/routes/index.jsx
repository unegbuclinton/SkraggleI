import { Route, Routes } from 'react-router-dom';
import routePaths from './routePaths';

const Routing = () => {
  // let isAuthenticated = true;
  // const PrivateWrapper = ({ isAuthenticated, ...props }) => {
  //   return isAuthenticated ? <Route {...props} /> : <Navigate to="/" />;
  // };
  return (
    <Routes>
      {routePaths.map((route) => {
        if (route.children) {
          const Children = () => {
            return (
              <Routes>
                {route?.children?.map((child, index) => {
                  return (
                    <Route
                      path={child.path}
                      key={index}
                      index={child.index}
                      element={child.element}
                    />
                  );
                })}
              </Routes>
            );
          };
          return (
            <Route
              key={Math.random()}
              path={route.path}
              element={<Children />}
            />
          );
        }

        return (
          <Route
            key={Math.random()}
            path={route.path}
            element={route.element}
          />
        );
      })}
    </Routes>
  );
};

export default Routing;
  