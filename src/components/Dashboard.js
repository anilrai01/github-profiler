import React from "react";
import useGitHubApi from "../hooks/useGitHubApi";
import { useUserDataContext } from "../context/UserDataContext";

import UserIntroSection from "./Dash-Board/UserIntroSection";
import LeftDashSection from "./Dash-Board/LeftDashSection";
import ReportGrid from "./Dash-Board/RepoGrid";

export default function Dashboard({ match }) {
  const { userData } = useUserDataContext();
  const { requestUserData } = useGitHubApi();

  React.useEffect(() => {
    if (userData === null) {
      requestUserData(match.params.username);
    }
  }, [userData, requestUserData, match.params.username]);

  return (
    <div className="px-2 py-2 w-screen h-screen flex flex-row">
      {/* Left DashNav */}
      <LeftDashSection userData={userData} />

      {/* Righ Dash Nav */}
      <div className="right-dash flex flex-col w-full h-full">
        {/* Basic User Introduction */}
        <UserIntroSection userData={userData} />
        {/* Small Nav */}
        <div className="flex-none flex items-center w-full px-6 py-2 bg-blue-200 rounded-lg mb-2">
          <p className="font-rubik-medium text-lg text-gray-label">
            Top Repositories
          </p>
        </div>

        {/* Repository List Grid */}
        <ReportGrid userData={userData} />
      </div>
    </div>
  );
}
