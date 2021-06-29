import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home, Error404 } from "~/pages";

const Routes = () => {
  return (
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
};

export default Routes;
