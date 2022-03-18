import DashboardLayout from "components/layouts/DashboardLayout";
import SendVerification from "components/molecules/sendVerification/SendVerification";

import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import LogIn from "components/molecules/LogIn/LogIn";
import ForgotPassword from "components/molecules/ForgotPassword/ForgotPassword";

function App() {
  let isAuthenticated = true;

  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SendVerification />} />
        <Route path="/contacts" element={<DashboardLayout />} />
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
