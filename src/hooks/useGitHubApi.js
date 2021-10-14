import { useState } from "react";
import axios from "axios";

export default function useGitHubApi() {
  const [userData, setUserData] = useState({});
  const [loadingStat, setLoadingStat] = useState(false);

  const requestUserData = async (username, callback) => {
    setLoadingStat(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setLoadingStat(false);
      setUserData(response.data);
      // Callback to redirect to Dashboard Route //
      callback();
    } catch (error) {
      setLoadingStat(false);
      console.log("Error on initial request : ", error);
    }
  };

  return { isLoading: loadingStat, userData, requestUserData };
}
