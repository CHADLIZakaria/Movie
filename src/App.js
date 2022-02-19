import './App.css';
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Movies'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Movie from './pages/Movie';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
