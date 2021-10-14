import { useState } from "react";
import axios from "axios";
import { useUserDataContext } from "../context/UserDataContext";

export default function useGitHubApi() {
  const [loadingStat, setLoadingStat] = useState(false);
  const { setUserData } = useUserDataContext();

  const requestUserData = async (username, callback = false) => {
    setLoadingStat(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      // console.log("Responses: ", response.data);
      setLoadingStat(false);
      setUserData(response.data);

      // Callback to redirect to Dashboard Route //
      callback && callback();
    } catch (error) {
      setLoadingStat(false);
      console.log("Error on initial request : ", error);
    }
  };

  return { isLoading: loadingStat, requestUserData };
}
