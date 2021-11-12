import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import Home from "./Pages/Home/Home"
import Repos from "./Pages/Repos/Repos"
import Followers from "./Pages/Followers/Followers"
import MainLayout from './Components/Custom/MainLayout/MainLayout';

function App() {

  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/followers/:user" exact>
            <Followers/>
          </Route>

          <Route path="/repos/:user" exact>
            <Repos />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks