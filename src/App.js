import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
