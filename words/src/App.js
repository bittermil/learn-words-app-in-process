import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Wordlist from "./components/Wordlist";
import WordcardSlider from "./components/WordcardSlider";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/words" element={<Wordlist />} />
            <Route path="/practice" element={<WordcardSlider />} />
            <Route path="/" element={<Home />}>
            <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


