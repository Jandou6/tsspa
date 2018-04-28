import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { render } from 'react-dom';
import { HomeComponent } from './Home';
import { AboutComponent } from './About';

export class RouterCompnent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/about" component={AboutComponent}/>
        </Switch>
      </Router>
    );
  }
}