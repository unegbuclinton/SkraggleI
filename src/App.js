import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from './routes';
function App() {
  return (
    <Router>
      <Routing />
      <ToastContainer hideProgressBar autoClose={1000} draggable pauseOnHover={false} />
    </Router>
  );
}

export default App;
