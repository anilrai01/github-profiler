import React from "react";
import useGitHubApi from "../hooks/useGitHubApi";
import { useUserDataContext } from "../context/UserDataContext";
import GithubCharacter from "../assets/icons/github-character.svg";

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
        <div className="w-full px-6 py-3 bg-blue-200 rounded-lg mb-2 flex flex-row justify-between items-center">
          <div>
            <p className="font-rubik-bold text-4xl text-gray-500">
              Welcome {userData ? userData.name : ""},
            </p>
            <p className="font-rubik-light text-2xl text-gray-label mb-10">
              Here’s your brief Github information
            </p>

            <div className="flex flex-row">
              <div className="flex flex-row mr-4">
                <p className="font-rubik-bold text-sm text-gray-500 mr-2">
                  {userData ? userData.public_repos : 0}
                </p>
                <p className="font-rubik-regular text-sm text-gray-label">
                  Public Repos
                </p>
              </div>
              <div className="flex flex-row mr-4">
                <p className="font-rubik-bold text-sm text-gray-500 mr-2">
                  {userData ? userData.public_gists : 0}
                </p>
                <p className="font-rubik-regular text-sm text-gray-label">
                  Public Gists
                </p>
              </div>
              <div className="flex flex-row">
                <p className="font-rubik-bold text-sm text-gray-500 mr-2">
                  Joined GitHub @
                </p>
                <p className="font-rubik-regular text-sm text-gray-label mr-2">
                  {userData ? userData.created_at : 0}
                </p>
              </div>
            </div>
          </div>
          <img
            alt="Github Character"
            src={GithubCharacter}
            className="w-git-c-w h-git-c-h"
          />
        </div>
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
