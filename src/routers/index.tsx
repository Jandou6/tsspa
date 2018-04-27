import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { render } from 'react-dom';
import { HomeComponent } from './Home';

export class RouterCompnent extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomeComponent}/>
      </Router>
    );
  }
}