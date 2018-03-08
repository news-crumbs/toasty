import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Favorite from "./pages/Favorites";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Flip from "./components/Flip";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/favorites" component={Favorite} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>


export default App;
