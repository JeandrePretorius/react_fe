import './App.css';
import HomePage from './components/HomePage/HomePage'
import ExplorePage from './components/ExplorePage/ExplorePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/fonts.css';  // Import the CSS where the @font-face is defined


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
