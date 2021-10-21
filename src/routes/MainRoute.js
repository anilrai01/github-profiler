import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "../components/LogIn";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";
import React from "react";
import Spinner from "../components/Spinner";
import { useUserDataContext } from "../context/UserDataContext";

export default function MainRoute() {
  const { isLoading } = useUserDataContext();

  return (
    <React.Fragment>
      {/* Common Spinner Component */}
      <Spinner visStat={isLoading} />
      <Switch>
        <Route path="/" component={LogIn} exact />
        <Route path="/dashboard/user/:username" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}
