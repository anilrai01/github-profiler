import React from "react";
import useGitHubApi from "../hooks/useGitHubApi";
import { useUserDataContext } from "../context/UserDataContext";

import UserIntroSection from "./Dash-Board/UserIntroSection";
import LeftDashSection from "./Dash-Board/LeftDashSection";

export default function Dashboard({ match }) {
  const { userData } = useUserDataContext();
  const { requestUserData } = useGitHubApi();

  React.useEffect(() => {
    if (userData === null) {
      requestUserData(match.params.username);
    }
  }, [userData, requestUserData, match.params.username]);

  return (
    <div className="px-2 py-2 w-screen h-screen overflow-hidden flex flex-row">
      {/* Left DashNav */}
      <LeftDashSection userData={userData} />

      {/* Righ Dash Nav */}
      <div className="right-dash w-full overflow-hidden">
        <UserIntroSection userData={userData} />
        {/* Small Nav */}
        <div className="w-full px-6 py-4 bg-blue-200 rounded-lg">
          <p className="font-rubik-medium text-lg text-gray-label">
            Top Repositories
          </p>
        </div>

        <div className="w-full h-full overflow-y-auto">
          <div className="w-full px-4">
            {/* <pre>{JSON.stringify(userData, undefined, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}
