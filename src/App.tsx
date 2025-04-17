import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";

import "./App.css";

import { useState, useEffect } from "react";

function App({ q = "LandingPage" }: { q: string }) {
  let [page, setPage] = useState(q);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    const log = localStorage.getItem("isLoggedIn");
    if (log === "true") setPage("Dashboard");
  }, []);

  function updateIsLoggedIn(value: boolean) {
    localStorage.setItem("isLoggedIn", value.toString());
    setIsLoggedIn(value);
    if (isLoggedIn === false) {
      setPage("LandingPage");
    }
  }
  function updateState(value: string) {
    setPage(value);
  }

  return (
    <div id="appDiv">
      <DefaultPage
        page={isLoggedIn ? "Dashboard" : page}
        updatePage={updateState}
        updateIsLoggedIn={updateIsLoggedIn}
      ></DefaultPage>
    </div>
  );
}

function DefaultPage({
  page: p,
  updatePage,
  updateIsLoggedIn,
}: {
  page: string;
  updatePage: Function;
  updateIsLoggedIn: Function;
}) {
  switch (p) {
    case "LandingPage":
      return (
        <LandingPage
          updatePage={updatePage}
          updateIsLoggedIn={updateIsLoggedIn}
        ></LandingPage>
      );
    case "Dashboard":
      return <Dashboard updateIsLoggedIn={updateIsLoggedIn}></Dashboard>;
    default:
      return <Error></Error>;
  }
}

export default App;
