import DashboardLayout from 'components/layouts/DashboardLayout';
import Nav from 'components/molecules/CampaignDetails/Nav/Nav';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  let isAuthenticated = true;

  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
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
