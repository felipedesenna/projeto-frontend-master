import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
