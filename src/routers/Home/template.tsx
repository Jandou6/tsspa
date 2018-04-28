import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.scss');
@CSSModules(style, {allowMultiple: true})
export class HomeComponent extends React.Component {
  render() {
    return (
      <div styleName="home-page">
        <h1>TypeScript SPA.</h1>
        <p>This is a demo page.</p>
        <p>You can also click <a href="#">/about</a> to try react-router.</p>
      </div>
    );
  }
}