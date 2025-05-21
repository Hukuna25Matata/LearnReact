import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Score from './pages/Score';
import Rules from './pages/Rules';
import Stats from './pages/Stats';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<Score />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
}

export default App;
