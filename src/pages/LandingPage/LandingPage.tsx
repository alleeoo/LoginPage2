import checkValidity from "../../logic/checkValidity";

import "./LandingPage.css";

import { useState } from "react";

export default function LandingPage({
  updatePage,
  updateIsLoggedIn,
}: {
  updatePage: Function;
  updateIsLoggedIn: Function;
}) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(false);

  function updateIsInvalid(value: boolean) {
    setIsInvalid(value);
  }
  const handleClick = () => {
    updatePage(checkValidity(credentials, updateIsLoggedIn, updateIsInvalid));
  };
  const keyPressed = (event: any) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="parentDiv">
      <div className="formContainer">
        <h1 style={{ paddingBottom: "10px" }}>Login Page</h1>
        <div id="form">
          <label onKeyDown={keyPressed}>
            Username:
            <input
              onChange={(e) => {
                setCredentials({
                  username: e.target.value,
                  password: credentials.password,
                });
              }}
              placeholder="Type your username"
            ></input>
          </label>
          <label onKeyDown={keyPressed}>
            Password:
            <input
              type="password"
              onChange={(e) => {
                setCredentials({
                  username: credentials.username,
                  password: e.target.value,
                });
              }}
              placeholder="Type your password"
            ></input>
          </label>
          <p style={{ color: "red", display: isInvalid ? "" : "none" }}>
            Username or password is incorrect
          </p>
          <button onClick={handleClick} onKeyDown={keyPressed} id="loginBtn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
