import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.scss');
@CSSModules(style, {allowMultiple: true})
export class HomeComponent extends React.Component {
  render() {
    return (
      <div styleName="home-page">
        Home
      </div>
    );
  }
}