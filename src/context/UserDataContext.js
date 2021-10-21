import { createContext, useContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [userRepoData, setUserRepoData] = useState([]);
  const [userLangChartData, setUserLangChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        userRepoData,
        setUserRepoData,
        userLangChartData,
        setUserLangChartData,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
