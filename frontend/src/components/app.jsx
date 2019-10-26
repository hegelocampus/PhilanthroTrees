import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


//import TopBar from './top_bar/top_bar';
import MainDisplay from './main/main_display';
import Splash from './splash/splash';

export default () => (
  <React.Fragment>
    <Switch>
      <AuthRoute authComponent={ Splash } protectedComponent={ MainDisplay } />
    </Switch>
  </React.Fragment>
);

