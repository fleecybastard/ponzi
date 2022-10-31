import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages';
import Terms_and_Conditions from './pages/terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/*" element={<HomePage/>} />
        <Route path="/terms" element={<Terms_and_Conditions/>} />
      </Routes>
    </Router>
  );
}

export default App;
