import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Countdown />
        <Links />
        <Footer />
      </div>
    </>
  );
}

export default App
