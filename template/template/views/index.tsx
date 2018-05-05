import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.scss');
import { Link } from 'react-router-dom';
export default class {{ViewName}}Component extends React.Component {
  render() {
    return (
      <div styleName="{{ViewName}}-page">
        <h1>Now is in {{ViewName}} Page.</h1>
        <p>
          You can also click<Link to={'/'}> home page</Link>to try react-router.
        </p>
      </div>
    );
  }
}