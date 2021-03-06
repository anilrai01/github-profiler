import useMath from "../../hooks/useMath";
import { useUserDataContext } from "../../context/UserDataContext";

import Star from "../../assets/icons/star.svg";
import Fork from "../../assets/icons/fork.svg";
import React from "react";

export default function RepoCard({ data }) {
  const { abstractDate } = useMath();
  const { userLangChartData } = useUserDataContext();

  const getLangColor = (lang) => {
    if (userLangChartData.length > 0) {
      return (
        userLangChartData.filter((el) => el.label === lang)[0] &&
        userLangChartData.filter((el) => el.label === lang)[0].color
      );
    }
  };

  return (
    <div className="p-2 min-h-repo-card-dim">
      <a href={data.html_url} target="_blank" rel="noreferrer">
        <div className="w-full h-full px-6 py-5 flex flex-col justify-between shadow-repoBox rounded-lg cursor-pointer">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-roboto-mono-bold text-base md:text-xl text-blue-medium w-4/5 truncate">
                {data.name}
              </h1>
              <h1 className="font-rubik-light text-xs text-gray-label border border-gray-outline rounded-2xl px-5 py-1">
                {data.private ? "Private" : "Public"}
              </h1>
            </div>

            <p className="font-rubik-light text-xs lg:text-sm text-gray-label leading-tight py-3">
              {data.description}
            </p>
          </div>

          <div className="flex md:flex-row sm:flex-col justify-between items-center">
            <div className="flex flex-row justify-start items-center">
              {data.language && (
                <div className="mr-4 lg:mr-8 flex flex-row items-center">
                  <div
                    className="h-2.5 w-2.5 rounded-full mr-2"
                    style={{ backgroundColor: getLangColor(data.language) }}
                  />
                  <p className="font-regular-rubik text-xs text-gray-medium">
                    {data.language}
                  </p>
                </div>
              )}
              {Number(data.stargazers_count) > 0 && (
                <div className="mr-6 flex flex-row items-center">
                  <img alt="Star Icon" src={Star} className="h-4 mr-1" />
                  <p className="font-regular-rubik text-xs text-gray-medium">
                    {data.stargazers_count}
                  </p>
                </div>
              )}

              {Number(data.forks_count) > 0 && (
                <div className="flex flex-row items-center">
                  <img alt="Star Icon" src={Fork} className="h-3.5 mr-1" />

                  <p className="font-regular-rubik text-xs text-gray-medium">
                    {data.forks_count}
                  </p>
                </div>
              )}
            </div>

            <p className="font-rubik-regular text-xs text-gray-outline truncate md:p-0 sm:pt-2">
              Last updated on : {abstractDate(data.updated_at)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
