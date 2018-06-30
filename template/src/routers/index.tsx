import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import * as Loadable from 'react-loadable';
const HomeComponent = Loadable({
  loader: () => import('./Home' /* webpackChunkName:"home" */),
  loading() {
    return <div>Loading....</div>;
  },
});

const AboutComponent = Loadable({
  loader: () => import('./About' /* webpackChunkName:"about" */),
  loading() {
    return <div>Loading....</div>;
  },
});

export class RouterComp extends React.Component {
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

export const RouterCompnent = hot(module)(RouterComp);