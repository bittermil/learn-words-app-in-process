import './App.css'
import React from 'react'
import WordList from './components/Wordlist';
import Wordcard from './components/Wordcard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
          <WordList/>

          <h2>Карточка</h2>
          <Wordcard english={"plum"} russian={"слива"} transcription={"[plʌm]"} front></Wordcard>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
