import { useState } from "react";
import axios from "axios";

export default function useGitHubApi() {
  const [userData, setUserData] = useState({});

  const requestUserData = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      // console.log("User Data: ", response.data);
      setUserData(response.data);
    } catch (error) {
      console.log("Error on initial request : ", error);
    }
  };

  return { userData, requestUserData };
}
