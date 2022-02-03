import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import News from './News';
import Newsview from './Newsview';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/about" element={ <About /> } />
          </Routes>
          <Routes>
            <Route path="/news/:id" element={ <Newsview /> } />
          </Routes>
          <Routes>
            <Route path="/news" element={ <News /> } />
          </Routes>
          <Routes>
            <Route path="/" element={ <Main /> } />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
