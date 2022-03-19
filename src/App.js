import DashboardLayout from 'components/layouts/DashboardLayout';
import Registration from 'components/molecules/Registration/Registration'
import ResetPassword from 'components/molecules/ResetPassword/ResetPassword'


import Table from 'components/layouts/Table';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { columns, data } from 'utilities/tableTestData';

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
            <div style={{ width: '100%', height: '100vh', padding: '5rem' }}>
              <Table data={data} columns={columns} isSelectable />
            </div>
          }
        />
        <Route path="/contacts" element={<DashboardLayout />} />
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
