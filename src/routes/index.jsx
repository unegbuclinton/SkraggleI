import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

const Routing = () => {
  let isAuthenticated = true;
  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{}}>
              {/* <Table data={data} columns={columns} isSelectable /> */}
              <LogIn />
            </div>
          }
        />
        <Route path="/contacts" element={<DashboardLayout />} />
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default Routing;
