import React from 'react';
import Buy from './Buy';
import Navbar from './navbar';
import Sell from './Sell';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <div className="content">
          <Route exact path = "/">
            <Sell />
          </Route>
          <Route path = "/buy">
            <Buy />
          </Route>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
