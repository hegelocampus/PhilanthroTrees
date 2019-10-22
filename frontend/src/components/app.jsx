import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//import TopBar from './top_bar/top_bar';
import MainDisplay from './main/main_display';
import Splash from './splash/splash';

export default () => (
  <React.Fragment>
    {/*<TopBar />*/}
    <main>
      <AuthRoute component={ Splash } />
      <ProtectedRoute component={ MainDisplay } />
    </main>
  </React.Fragment>
);

