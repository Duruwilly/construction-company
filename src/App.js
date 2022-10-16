import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./responsive.css";
import "./scrollbar.css";
import "./style.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import jQuery from 'jquery';
import Footer from './components/Footer';



function App() {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 3500)

  if (loader) return <div className="preloader">
        <div className="loader"></div>
    </div>
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
