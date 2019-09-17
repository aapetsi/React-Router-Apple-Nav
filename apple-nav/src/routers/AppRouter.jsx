import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <Route path="/" component={Header} />
    </Router>
  );
};

export default AppRouter;
