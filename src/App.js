import DashboardLayout from 'components/layouts/DashboardLayout';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import LogIn from 'components/molecules/LogIn/LogIn';
import ForgotPassword from 'components/molecules/ForgotPassword/ForgotPassword';

function App() {
  let isAuthenticated = true;

  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/contacts" element={<DashboardLayout />} />
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />


      </Routes>
    </Router>
  );
}

export default App;
