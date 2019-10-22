import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';


export default ({store}) => {
  return (
    <Provider store={ store }>
      <Router>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Router>
    </Provider>
  )
}