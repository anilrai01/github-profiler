import { useState } from "react";
import axios from "axios";
import { useUserDataContext } from "../context/UserDataContext";
import GhPolyglot from "gh-polyglot";

export default function useGitHubApi() {
  const [loadingStat, setLoadingStat] = useState(false);
  const { setUserData, setUserRepoData } = useUserDataContext();
  const [userLangChart, setUserLangChart] = useState([]);

  const requestUserData = async (username, callback = false) => {
    setLoadingStat(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      // console.log("User Data Responses: ", response.data);
      setLoadingStat(false);
      setUserData(response.data);

      // Callback to redirect to Dashboard Route //
      callback && callback();
    } catch (error) {
      setLoadingStat(false);
      console.log("Error on initial request : ", error);
    }
  };

  const requestUserPolyglotChart = (username) => {
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
        setUserLangChart(stats);
        // return stats;
      }
    });
  };

  const requestUserRepository = async (username) => {
    setLoadingStat(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      // console.log("Repo Response: ", response.data);
      setLoadingStat(false);
      setUserRepoData(response.data);
    } catch (error) {
      setLoadingStat(false);
      console.log("Error on requesting repo data: ", error);
    }
  };

  return {
    isLoading: loadingStat,
    requestUserData,
    userLangChart,
    requestUserPolyglotChart,
    requestUserRepository,
  };
}
