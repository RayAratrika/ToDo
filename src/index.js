import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Task from './Task';

ReactDOM.render(
  <div>
    <Task />
  </div>,
  document.getElementById('root'),
)
serviceWorker.unregister();