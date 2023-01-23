import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import Other from './routes/other';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/other" component={Other}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
