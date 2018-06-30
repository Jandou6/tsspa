import * as React from 'react';
import { render } from 'react-dom';
import { RouterCompnent } from './routers';
function init() {
  const dom = document.getElementById('app');
  render(
    <RouterCompnent/>,
    dom,
  );
}

init();