import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import FlipPage from "react-flip-page";

const App = () =>
<FlipPage>
<article>
  <h1>My awesome first article</h1>
  <p>My awesome first content</p>
</article>
<article>
  <h1>My wonderful second article</h1>
  <p>My wonderful second content</p>
</article>
<article>
  <h1>My excellent third article</h1>
  <p>My excellent third content</p>
</article>
</FlipPage>;

export default App;
