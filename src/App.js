import './App.css';
import HomePage from './components/HomePage/HomePage'
import ExplorePage from './components/ExplorePage/ExplorePage'
import CreatePage from './components/CreatePage/CreatePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/fonts.css';  // Import the CSS where the @font-face is defined
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/haiku" element={<CreatePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
