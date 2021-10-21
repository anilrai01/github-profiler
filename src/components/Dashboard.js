import React from "react";
import useGitHubUserData from "../hooks/useGitHubUserData";

import LeftDashSection from "./Dash-Board/LeftDashSection";
import RightDashSection from "./Dash-Board/RightDashSection";
import NotFound from "./NotFound";

export default function Dashboard({ match, history }) {
  const { gitUserOp, userData } = useGitHubUserData();

  React.useEffect(() => {
    gitUserOp.requestUserData(match.params.username);
  }, [match.params.username, gitUserOp]);

  if (userData === null) {
    return <NotFound message="Oops ! Requested user is not found !" />;
  }

  return (
    <React.Fragment>
      <div className="px-2 py-2 w-screen h-screen flex flex-col md:flex-row justify-between">
        <LeftDashSection userData={userData} />

        <RightDashSection userData={userData} />
      </div>
    </React.Fragment>
  );
}
