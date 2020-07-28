import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// my Components...

import Nav from './Nav';
import RegisterStudent from './RegisterStudent';
import CreateAssignment from './CreateAssignment';
import Assignments from './Assignments';
import Assignment from './Assignment';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <div className='container'>
            <Route path='/signup' component={RegisterStudent} />
            <Route path='/create' component={CreateAssignment} />
            <Route path='/assignment' component={Assignment} />
            <Route path='/' exact component={Assignments} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
