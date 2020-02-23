import React from 'react';
import './styles/app.scss';
import Songs from './components/Songs';

import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Section">
        <div className="line-container">
          <h1 className="Logo">Betz<br/>Beatz</h1>
        </div>
      </div>
      <Songs />
      <Contact />
      <footer></footer>
    </div>
  );
}

export default App;
