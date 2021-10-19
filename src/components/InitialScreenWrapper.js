import React from "react";
import TopVector from "../assets/images/vector-top.png";
import BottomVector from "../assets/images/vector-bottom.png";

import GitHubLogo from "../assets/icons/github-logo.svg";

export default function InitialScreenWrapper(props) {
  return (
    <React.Fragment>
      <div className="relative w-screen h-screen overflow-hidden flex justify-center">
        <img
          alt={"top-vector"}
          src={TopVector}
          className="absolute -top-10 -right-60 w-vec-w h-vec-h z-n-10"
        />
        <img
          alt={"bottom-vector"}
          src={BottomVector}
          className="absolute -bottom-64 -left-28 w-vec-w h-vec-h z-n-10"
        />

        {/* Mid Column */}
        <div className="flex flex-col items-center w-full py-24">
          <h1 className="font-rubik-bold text-2xl">
            GitHub<span className="text-brand">&nbsp;Profiler</span>
          </h1>
          <p className="font-roboto-mono-light">Check on your GitHub profile</p>

          {/* <GitHubLogo /> */}
          <img
            src={GitHubLogo}
            alt={"GitHub Logo"}
            className="w-git-l-w h-git-l-h object-contain mt-10"
          />
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
}
