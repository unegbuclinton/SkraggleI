import ProgressBar from "components/atoms/ProgressBar/ProgressBar";
import DashboardLayout from "components/layouts/DashboardLayout";
import Registration from "components/molecules/Registration/Registration";
import ResetPassword from "components/molecules/ResetPassword/ResetPassword";

import Table from "components/layouts/Table";
import DateRange from "components/molecules/DateRange";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LogIn from "components/molecules/LogIn/LogIn";
import ForgotPassword from "components/molecules/ForgotPassword/ForgotPassword";
import Campaign from "pages/Campaign";
import { columns, data } from 'utilities/tableTestData';
import Dashboard from 'pages/Dashboard-components/Dashboard';

function App() {
  let isAuthenticated = true;

  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<DashboardLayout />} />
        <Route
          path="/"
          element={
            <div style={{ width: "100%", height: "100vh", padding: "5rem" }}>
              {/* <Table data={data} columns={columns} isSelectable /> */}
              <DateRange />
            </div>
          }
        />
        <Route path="/contacts" element={<DashboardLayout />} />
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/dashboard-components" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
