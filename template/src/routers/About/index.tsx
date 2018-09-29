import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as CSSModules from 'react-css-modules';
const style = require('./style');
import { Link } from 'react-router-dom';
@CSSModules(style, {allowMultiple: true})
class AboutComponent extends React.Component {
  render() {
    return (
      <div styleName="about-page">
        <h1>Now is in About Page.</h1>
        <p>
          You can also click<Link to={'/'}> home page</Link>to try react-router.
        </p>
      </div>
    );
  }
}
export default hot(module)(AboutComponent);