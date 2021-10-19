import React from "react";
import ReportGrid from "./RepoGrid";
import UserIntroSection from "./UserIntroSection";

export default function RightDashSection({ userData }) {
  return (
    <React.Fragment>
      {/* Righ Dash Nav */}
      <div className="right-dash flex flex-col w-full h-4/5 md:h-full">
        {/* Basic User Introduction */}
        <UserIntroSection userData={userData} />
        {/* Small Nav */}
        <div className="flex-none flex items-center w-full px-6 py-2 bg-blue-200 rounded-lg mb-2">
          <p className="font-rubik-medium sm:text-base md:text-lg text-gray-label">
            Top Repositories
          </p>
        </div>

        {/* Repository List Grid */}
        <ReportGrid userData={userData} />
      </div>
    </React.Fragment>
  );
}
