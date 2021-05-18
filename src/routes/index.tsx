import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

function renderRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) =>
          <Route
            exact={route.isExact}
            key={route.path}
            path={route.path}
            render={(props: any) => <route.Component {...props} />}
          />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export { renderRoutes };