import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
// Import Global Nav
import Nav from './components/Nav';
//Globla Style
import GlobalStyle from './components/GlobalStyle';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs  />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
