import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import Register from './components/Registration/index';
import {Provider} from 'react-redux'
import {store} from './store/store/store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <Switch>     
        <Route exact path='/' component={Register}></Route>
       </Switch>
       </Router>
       </Provider>
    );
  }
}

export default App;