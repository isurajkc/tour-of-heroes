import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, AddHero, HeroDetail } from 'screens';
import './index.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-hero" component={AddHero} />
          <Route exact path="/detail/:id" component={HeroDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
