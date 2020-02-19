import React from 'react';
import './styles/app.scss';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Section">
        <h1 className="Logo">Betz<br/>Beats</h1>
      </div>
    </div>
  );
}

export default App;
