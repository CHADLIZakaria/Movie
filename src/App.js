import './App.css';
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Movies/Movies'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Movie from './pages/Movie/Movie';
import Overlay from './components/Overlay/Overlay';
import Trending from './pages/Trending/Trending';
import Tv from './pages/Tv/Tv';

function App() {
  return (
    <Router>
      <Overlay />
      <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvs" element={<Tv />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
