import React from 'react';
import './styles/app.scss';
import Songs from './components/Songs';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Section">
        <div className="line-container">
          <div className="line l-one"></div>
          <div className="line 2-one"></div>
          <div className="line 3-one"></div>
          <div className="line 4-one"></div>
          <h1 className="Logo">Betz<br/>Beats</h1>
        </div>
      </div>
      <Songs />
      <footer></footer>
    </div>
  );
}

export default App;
