import React from "react";
import "./App.css";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import Layout from "./components/layout/layout";
import CssBaseline from '@material-ui/core/CssBaseline';
import NoMatch from "./components/pages/404/no-match";
import Home from "./components/pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>        
        <CssBaseline />
        <Layout header={<Header />} footer={<Footer/>}>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;
