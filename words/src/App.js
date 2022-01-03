import './App.css'
import React from 'react'
import WordList from './components/Wordlist';
import Wordcard from './components/Wordcard';

function App() {
  return (
    <div className={App}>
        <header className='header'>
          <div className='projectName'>Word Quiz App</div>
          <image className='logo'></image>
        </header>
        <main className='main'>
          <WordList></WordList>

          <h2>Карточка спереди</h2>
          <Wordcard english={"plum"} russian={"слива"} transcription={"[plʌm]"} front></Wordcard>

          <h2>Карточка сзади</h2>
          <Wordcard english={"plum"} russian={"слива"} transcription={"[plʌm]"}></Wordcard>
        </main>
        <footer className='footer'>© 2021</footer>
    </div>
  );
}

export default App;
