// import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import generateUUID from 'utilities/helpers';
import { privateRoutes, publicRoutes } from './routePaths';

const Routing = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  let isAuthenticated = false;
  function PrivateRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <Routes>
      {privateRoutes.map((route) => {
        if (route.children) {
          const Children = () => {
            return (
              <Routes>
                {route?.children?.map((child, index) => {
                  return (
                    <Route key={generateUUID} element={<PrivateRoute />}>
                      <Route
                        path={child.path}
                        key={index}
                        index={child.index}
                        element={child.element}
                      />
                    </Route>
                  );
                })}
              </Routes>
            );
          };
          return <Route key={Math.random()} path={route.path} element={<Children />} />;
        }

        return <Route key={Math.random()} path={route.path} element={route.element} />;
      })}

      {publicRoutes.map((publicRoute) => {
        if (publicRoute.children) {
          const Children = () => {
            return (
              <Routes>
                {publicRoute?.children?.map((child, index) => {
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
          return <Route key={Math.random()} path={publicRoute.path} element={<Children />} />;
        }

        return <Route key={Math.random()} path={publicRoute.path} element={publicRoute.element} />;
      })}
      {/* <Route
      path="/login"
      element={<LogIn onClick={()=>{setisLogged(true)}}/>}/> */}
    </Routes>
  );
};

export default Routing;
