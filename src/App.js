import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'


import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import Nav from 'components/molecules/CampaignDetails/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        
      <Button>Hello</Button>
      <Input />
      <CustomDropdown/>
      <Nav/>
      <Routes>
      <Route
        path="/"
        />
        <Route
        path="/overview"
        />
        <Route
        path="/form"
        />
        <Route
        path="/p2p"
        />
        <Route
        path="/elements"
        />
        <Route
        path="/events"
        />
        <Route
        path="/landing-page"
        />
          
      </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
