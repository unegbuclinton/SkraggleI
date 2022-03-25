import { BrowserRouter as Router } from 'react-router-dom';
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
        <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />


        <Route path="/dashboard-components" element={<Dashboard />} />
        <Route path="/set-revenue" element={<SetRevenueModal/>} />
        <Route path="/widgets" element={<WidgetModal/>} />
     

      </Routes>
      <Routing />
    </Router>
  );
}

export default App;
