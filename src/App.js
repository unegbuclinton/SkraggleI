import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import DashboardLayout from 'components/layouts/DashboardLayout';
import Registration from 'components/molecules/Registration'
import ResetPassword from 'components/molecules/ResetPassword'
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';


import DateRange from 'components/molecules/DateRange';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from 'pages/Dashboard-components/Dashboard';
import SetRevenueModal from 'pages/modals/SetRevenueModal';
import WidgetModal from 'pages/modals/WidgetModal';
import Routing from 'routes/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<DashboardLayout />} />
        <Route
          path="/"
          element={
            <div style={{ width: '100%', height: '100vh', padding: '5rem' }}>
              {/* <Table data={data} columns={columns} isSelectable /> */}
              <DateRange />
            </div>
          }
        />
        <Route path="/contacts" element={<DashboardLayout />} />
        {/* <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route> */}
        <Route path="*" element={<div>Not Found</div>} />


        <Route path="/dashboard-components" element={<Dashboard />} />
        <Route path="/set-revenue" element={<SetRevenueModal/>} />
    
     

      </Routes>
      {/* <Routing /> */}
    </Router>
  );
}

export default App;
