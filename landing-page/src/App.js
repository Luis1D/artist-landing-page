import React from 'react';
import './styles/app.scss';
import Songs from './components/Songs';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Contact from './components/Contact';
import Albums from './components/Albums';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Section">
        <div className="line-container">
          <h1 className="Logo">Betz<br/>Beatz</h1>
        </div>
      </div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={ Songs } />
        {/* <Route path="/Songs" component={ Songs } /> */}
      </Switch>
      {/* <Albums />
      <Songs /> */}
      {/* <Contact /> */}
      <footer></footer>
    </div>
  );
}

export default App;
