import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header";
import MAC from "../components/MAC";
import IPAD from "../components/IPAD";
import IPHONE from "../components/IPHONE";
import Watch from "../components/Watch";
import TV from "../components/TV";
import Music from "../components/Music";
import Support from "../components/Support";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/mac" component={MAC} />
      <Route path="/ipad" component={IPAD} />
      <Route path="/iphone" component={IPHONE} />
      <Route path="/watch" component={Watch} />
      <Route path="/tv" component={TV} />
      <Route path="/music" component={Music} />
      <Route path="/support" component={Support} />
    </Router>
  );
};

export default AppRouter;
