import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Albums from './pages/Albums';
import Artist from './pages/Artist';
import Search from './pages/Search';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Artist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
