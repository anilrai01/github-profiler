import React from "react";
import Audiences from "../../assets/icons/audience.svg";
import Follower from "../../assets/icons/follow.svg";

import Company from "../../assets/icons/company.svg";
import Location from "../../assets/icons/location.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Website from "../../assets/icons/website.svg";

import useGitHubApi from "../../hooks/useGitHubApi";
import { Doughnut } from "react-chartjs-2";

export default function LeftDashSection({ userData }) {
  const { userLangChart, requestUserPolyglotChart } = useGitHubApi();

  React.useEffect(() => {
    if (userData && userData.login !== "" && userLangChart.length === 0) {
      requestUserPolyglotChart(userData.login);
    }
  }, [userData, requestUserPolyglotChart, userLangChart]);

  if (userLangChart.length > 0) {
    var data = {
      labels: userLangChart
        .filter((el, index) => index <= 5)
        .map((el) => el.label),
      datasets: [
        {
          label: "Top Languages in use",
          data: userLangChart
            .filter((el, index) => index <= 5)
            .map((el) => el.value),
          backgroundColor: userLangChart
            .filter((el, index) => index <= 5)
            .map((el) => el.color),
          hoverOffset: 4,
        },
      ],
    };
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          //   color: "rgb(255, 99, 132)",
        },
      },
      //   title: {
      //     display: true,
      //     text: "Top Languages in use: ",
      //     position: "top",
      //     font: {
      //       family: "Rubik-Regular",
      //       size: 14,
      //       weight: "medium",
      //     },
      //   },
    },
  };

  return (
    <div className="left-dash h-full w-2/6 md:w-1/4 bg-blue-200 rounded-lg mr-2 overflow-hidden">
      <div className="w-full flex justify-center items-center mt-4">
        <img
          alt={"Profile Avatar"}
          src={userData ? userData.avatar_url : ""}
          className="w-profile-avatar h-profile-avatar rounded-full object-contain"
        />
      </div>

      <div className="px-6 h-full flex flex-col">
        {/* Name and Bio */}
        <h1 className="font-rubik-medium text-gray-500 text-xl leading-none mt-3">
          {userData ? userData.name : ""}
        </h1>
        <p className="font-rubik-light text-sm leading-1 text-gray-medium">
          {userData ? userData.login : ""}
        </p>
        <p className="font-rubik-light text-xs text-gray-500 text-justify pt-3 pb-5 border-b border-gray-100">
          {userData ? userData.bio : ""}
        </p>
        {/* Social Following Section */}
        <div className="flex flex-row justify-around py-5 border-b border-gray-100">
          <div className="flex flex-row items-center justify-center">
            <img
              src={Audiences}
              className="w-icon-dim mr-2"
              alt="Followers Icon"
            />
            <p className="font-rubik-medium text-sm text-gray-label mr-1">
              {userData ? userData.followers : 0}
            </p>
            <p className="font-rubik-light text-xs">Followers</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              src={Follower}
              className="w-icon-dim mr-2"
              alt="Following Icon"
            />
            <p className="font-rubik-medium text-sm text-gray-label mr-1">
              {userData ? userData.following : 0}
            </p>
            <p className="font-rubik-light text-xs">Following</p>
          </div>
        </div>
        {/* Office | Website | Twitter Handle | Location */}
        <div className="flex flex-col mt-5">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            {userData && userData.company && (
              <div className="flex flex-row items-center">
                <img
                  src={Company}
                  className="w-icon-dim-sm mr-2"
                  alt="Company Icon"
                />
                <p className="font-rubik-light text-xs leading-1 text-gray-500 truncate">
                  {userData.company}
                </p>
              </div>
            )}
            {userData && userData.location && (
              <div className="flex flex-row items-center">
                <img
                  src={Location}
                  className="w-icon-dim-sm mr-2"
                  alt="Location Icon"
                />
                <p className="font-rubik-light text-xs text-gray-500 truncate">
                  {userData.location}
                </p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-1 pt-4">
            {userData && userData.twitter_username && (
              <div className="flex flex-row items-center">
                <img
                  src={Twitter}
                  className="w-icon-dim-sm mr-2"
                  alt="Twitter Hanlde Icon"
                />
                <p className="font-rubik-light text-xs text-gray-500 truncate">
                  {userData.twitter_username}
                </p>
              </div>
            )}
            {userData && userData.blog && (
              <div className="flex flex-row items-center">
                <img
                  src={Website}
                  className="w-icon-dim-sm mr-2"
                  alt="Twitter Hanlde Icon"
                />
                <p className="font-rubik-light text-xs text-gray-500 truncate">
                  {userData.blog}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Chart Section */}
        <p className="font-rubik-regular text-sm text-gray-500 py-3 mt-3">
          Top Languages in use:{" "}
        </p>
        {/* Doughnut Chart */}
        {userData && (
          <div className="bg-white rounded-lg px-2 justify-end">
            <Doughnut data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
}
