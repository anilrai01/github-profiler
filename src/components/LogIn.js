import React, { useState } from "react";
import InitialScreenWrapper from "./InitialScreenWrapper";

export default function LogIn(props) {
  const [username, setUserName] = useState("");
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (error) setError(false);

    if (username === "") {
      setError(true);
      return;
    }

    props.history.push(`/dashboard/user/${username}`);
    return;
  };

  const handleInputChange = (e) => {
    if (error) setError(false);
    setUserName(e.target.value);
  };

  return (
    <React.Fragment>
      <InitialScreenWrapper>
        {/* shadow-md */}
        <form
          className="rounded px-8 pt-6 pb-8 mb-4 w-80 relative -top-14"
          onSubmit={handleFormSubmit}
        >
          <div className="w-full mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label> */}
            <input
              className={`shadow appearance-none border-2 border-gray-medium ${
                error && "border-red-500"
              } rounded-lg w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-rubik-light`}
              id="username"
              type="text"
              placeholder="Enter your user name ..."
              value={username}
              onChange={handleInputChange}
            />
            {error && (
              <p className="font-rubik-medium text-red-500 text-xs py-1">
                Please enter your username first !
              </p>
            )}
          </div>
        </form>
      </InitialScreenWrapper>
    </React.Fragment>
  );
}
