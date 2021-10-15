import React from "react";
import useGitHubApi from "../hooks/useGitHubApi";
import { useUserDataContext } from "../context/UserDataContext";

import UserIntroSection from "./Dash-Board/UserIntroSection";

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
      <div className="left-dash h-full w-2/6 md:w-1/5 bg-blue-200 rounded-lg mr-2 overflow-hidden">
        <div className="w-full flex justify-center items-center mt-4">
          <img
            alt={"Profile Avatar"}
            src={userData ? userData.avatar_url : ""}
            className="w-profile-avatar h-profile-avatar rounded-full object-contain"
          />
        </div>
      </div>
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
