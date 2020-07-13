import React from "react";
import "./App.css";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import About from "./components/pages/about/about";
import Home from "./components/pages/home/home";
import NoMatch from "./components/pages/no-match/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
