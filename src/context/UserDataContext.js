import { createContext, useContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [userRepoData, setUserRepoData] = useState([]);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, userRepoData, setUserRepoData }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
