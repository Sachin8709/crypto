import './App.css'
import React from 'react';
import TickerList from './components/TickerList';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Header/>
      <TickerList />
    </div>
  );
}

export default App;
