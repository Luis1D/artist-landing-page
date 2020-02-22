import React from 'react';
import './styles/app.scss';
import Songs from './components/Songs';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Section">
        <h1 className="Logo">Betz<br/>Beats</h1>
      </div>
      <Songs />
      <footer></footer>
    </div>
  );
}

export default App;
