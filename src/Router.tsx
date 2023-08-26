import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:locationName">
          <Info />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
