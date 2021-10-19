import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import NotFound from "./components/NotFound";

import { UserDataContextProvider } from "./context/UserDataContext";

export default function App() {
  return (
    <UserDataContextProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={LogIn} exact />
            <Route path="/dashboard/user/:username" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </UserDataContextProvider>
  );
}
