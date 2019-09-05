import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import Register from './components/Registration/index';


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>     
        <Route exact path='/' component={Register}></Route>
       </Switch>
       </Router>
    );
  }
}

export default App;