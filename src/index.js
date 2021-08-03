import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Daypage from './daypage';
import Nightpage from './nightpage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Daypage} />
      <Route exact path="/Night" component={Nightpage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
