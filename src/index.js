import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Daypage from './daypage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Daypage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
