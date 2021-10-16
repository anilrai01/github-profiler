import GithubCharacter from "../../assets/icons/github-character.svg";
import useMath from "../../hooks/useMath";

export default function UserIntroSection({ userData }) {
  const { abstractDate } = useMath();
  return (
    <div className="flex-none w-full px-6 py-3 bg-blue-200 rounded-lg mb-2 flex flex-row justify-between items-center">
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
              {userData ? abstractDate(userData.created_at) : ""}
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
  );
}
