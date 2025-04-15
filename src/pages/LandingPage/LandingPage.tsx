import { useState } from "react";
import checkValidity from "../../logic/checkValidity";
import "./LandingPage.css";
export default function LandingPage({
  updatePage,
  updateIsLoggedIn,
}: {
  updatePage: any;
  updateIsLoggedIn: any;
}) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  return (
    <div className="parentDiv">
      <div className="formContainer">
        <h1 style={{ paddingBottom: "10px" }}>Login Page</h1>
        <label>
          Username:
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Type your username"
          ></input>
        </label>
        <label>
          Password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Type your password"
          ></input>
        </label>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
  function handleClick() {
    updatePage(
      checkValidity(
        {
          username: username,
          password: password,
        },
        updateIsLoggedIn
      )
    );
  }
}
