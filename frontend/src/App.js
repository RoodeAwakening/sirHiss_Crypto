import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage"

import * as sessionActions from "./store/session";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import PortfolioCoin from "./components/PortfolioCoin";
import Price from "./components/Price";
import PriceCoin from "./components/PriceCoin";
import News from "./components/News";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:coinId">
            <PortfolioCoin />
          </Route>
          <Route path="/price" exact>
            <Price />
          </Route>
          <Route path="/price/:coinId">
            <PriceCoin />
          </Route>
          <Route path="/news">
           <News />
          </Route>
          <Route path="/">
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
