import React from "react";
import useGitHubUserData from "../../hooks/useGitHubUserData";
import RepoCard from "./RepoCard";

export default function ReportGrid({ userData }) {
  const { gitUserOp, userRepoData } = useGitHubUserData();

  React.useEffect(() => {
    if (userData && userData.login !== "" && userRepoData.length === 0) {
      gitUserOp.requestUserRepository(userData.login);
    }
  }, [userData, gitUserOp, userRepoData]);

  return (
    <div className="flex-grow w-full h-full overflow-y-auto px-3">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* <pre>{JSON.stringify(userData, undefined, 2)}</pre> */}
        {userRepoData &&
          userRepoData.length > 0 &&
          userRepoData.map((el, index) => <RepoCard key={index} data={el} />)}
      </div>
    </div>
  );
}
