import "./Dashboard.css";

import { useState } from "react";

export default function Dashboard({
  updateIsLoggedIn,
}: {
  updateIsLoggedIn: Function;
}) {
  let [showDropdown, setDropDown] = useState(false);
  function updateDropDown() {
    setDropDown(!showDropdown);
  }
  return (
    <div id="parent">
      <div id="navBar">
        <div id="navChildren">
          <h4>Fake Dashboard</h4>
          <div id="navigation">
            <h4>Home</h4>
            <h4>FakePage1</h4>
            <h4>FakePage2</h4>
            <h4>FakePage3</h4>
          </div>
          <div id="userInfo">
            <button id="user" onClick={updateDropDown}>
              {localStorage.getItem("user")}
            </button>
          </div>
        </div>
      </div>
      <div
        id="body"
        onClick={() => {
          setDropDown(false);
        }}
      >
        <div id="children">
          <div id="heading">
            <h1>Welcome to this very Real website</h1>
            <p>
              We know what you’re thinking: “Is this even real?” And the answer
              is a resounding YES. TotallyRealStuff.com is your one-stop
              destination for 100% absolutely, positively, not-made-up things.
              From revolutionary gadgets to almost unbelievable services,
              everything here is as real as your grandma’s cookies. No smoke, no
              mirrors – just genuine, authentic, possibly-too-good-to-be-true
              goodness. But don’t worry, it’s true. Really. We pinky promise. So
              go ahead. Explore. Click around. Laugh, cry, be amazed. Just don’t
              call us fake – that hurts our very real feelings.
            </p>
          </div>
        </div>
        <div
          id="dropDownMenu"
          style={{ display: showDropdown ? "flex" : "none" }}
        >
          <LogoutBtn updateIsloggedIn={updateIsLoggedIn}></LogoutBtn>
        </div>
      </div>
    </div>
  );
}

function LogoutBtn({ updateIsloggedIn }: { updateIsloggedIn: Function }) {
  return (
    <button
      id="logoutBtn"
      onClick={() => {
        updateIsloggedIn(false);
        localStorage.clear();
      }}
    >
      Logout
    </button>
  );
}
