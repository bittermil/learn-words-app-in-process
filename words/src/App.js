import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Wordlist from "./components/Wordlist";
import WordAdder from "./components/WordAdder";
import WordcardSlider from "./components/WordcardSlider";
import NoMatch from "./components/NoMatch";
import { WordsContextProvider } from "./components/contexts/WordsContextProvider";

function App() {
  return (
    <WordsContextProvider>
      <Router>
        <div className="App">
          <Header/>
            <div className="content">
              <Routes>
                <Route path="/words" element={<Wordlist />} />
                <Route path="/practice" element={<WordcardSlider />} />
                <Route path="/manage" element={<WordAdder />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </WordsContextProvider>
  );
}

export default App;


