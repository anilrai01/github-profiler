import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={LogIn} exact />
          <Route path="/dashboard/user/:username" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
