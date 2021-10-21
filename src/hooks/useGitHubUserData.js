import { useState, useMemo } from "react";
import axios from "axios";
import GhPolyglot from "gh-polyglot";

import { useUserDataContext } from "../context/UserDataContext";

export default function useGitHubUserData() {
  const [userData, setUserData] = useState(null);
  const [userRepoData, setUserRepoData] = useState([]);
  const [userLangChartData, setUserLangChartData] = useState([]);

  const { setIsLoading } = useUserDataContext();

  const githubUserFuncMemo = useMemo(
    () => ({
      requestUserData: async (username) => {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          // console.log("User Data Responses: ", response.data);
          //   console.log("Username: ", username);
          setIsLoading(false);
          setUserData(response.data);
        } catch (error) {
          // console.log("Error on initial request : ", error.response);
          setIsLoading(false);
          if (error.response) {
            if (error.response.status === 404) {
              //   setErrorResponse(true);
              console.log("User Doesn't exist");
            }
          }
        }
      },
      requestUserRepository: async (username) => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );
          // console.log("Repo Response: ", response.data);
          setUserRepoData(response.data);
        } catch (error) {
          console.log("Error on requesting repo data: ", error);
        }
      },
      requestUserPolyglotChart: (username) => {
        // let user1 = new GhPolyglot(`${username}/autoShop`);
        let user = new GhPolyglot(username);

        // Repository stats
        // https://api.github.com/repos/anilrai01/autoShop/languages
        // Language Status for Particular Repository
        // user1.repoStats(function (err, stats) {
        //   console.log(err || stats);
        // });

        // User stats
        // https://api.github.com/users/anilrai01/autoShop/repos?per_page=100&page=1
        user.userStats(function (err, stats) {
          if (err) {
            console.log("Error: ", err);
          } else {
            // console.log("Repository Language Stat: ", stats);
            setUserLangChartData(stats);
          }
        });
      },
    }),
    [setIsLoading]
  );

  return {
    gitUserOp: githubUserFuncMemo,
    userData,
    userRepoData,
    userLangChartData,
  };
}
