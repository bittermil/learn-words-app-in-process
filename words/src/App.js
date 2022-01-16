import './App.css'
import React from 'react'
import WordList from './components/Wordlist';
import WordcardSlider from './components/WordcardSlider';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
          <WordList/>

          <h2>Карточка</h2>
          <WordcardSlider></WordcardSlider>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
