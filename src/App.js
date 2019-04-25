import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Movie} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
