import TopVector from "../assets/images/vector-top.png";
import BottomVector from "../assets/images/vector-bottom.png";

import GitHubLogo from "../assets/icons/github-logo.svg";
// import GitHubLogo from "../assets/images/github-logo.png";

export default function LogIn() {
  return (
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
        {/* shadow-md */}
        <form className="rounded px-8 pt-6 pb-8 mb-4 md:w-3/12 sm:w-7/12 relative -top-14">
          <div className="w-full mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label> */}
            <input
              className="shadow appearance-none border-2 border-gray-medium rounded-lg w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-rubik-light"
              id="username"
              type="text"
              placeholder="Enter your user name ..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
