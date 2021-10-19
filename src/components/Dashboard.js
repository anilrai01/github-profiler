import React from "react";
import useGitHubApi from "../hooks/useGitHubApi";
import { useUserDataContext } from "../context/UserDataContext";

import LeftDashSection from "./Dash-Board/LeftDashSection";
import RightDashSection from "./Dash-Board/RightDashSection";

export default function Dashboard({ match, history }) {
  const { userData } = useUserDataContext();
  const { requestUserData } = useGitHubApi();

  React.useEffect(() => {
    if (userData === null) {
      requestUserData(match.params.username, false, history.push("/not-found"));
    }
  }, [userData, requestUserData, match.params.username, history]);

  return (
    <div className="px-2 py-2 w-screen h-screen flex flex-col md:flex-row justify-between">
      {/* Left DashNav */}
      <LeftDashSection userData={userData} />

      <RightDashSection userData={userData} />
    </div>
  );
}
