import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import { useState } from "react";
function App({ q = "LandingPage" }: { q: string }) {
  let [page, setPage] = useState(q);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let log = localStorage.getItem("isLoggedIn");
  console.log(log);
  function updateIsLoggedIn(value: boolean) {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(value);
  }
  function updateState(value: any) {
    setPage(value);
  }

  return (
    <DefaultPage
      p={isLoggedIn ? "DashBoard" : page}
      updatePage={updateState}
      updateIsLoggedIn={updateIsLoggedIn}
    ></DefaultPage>
  );
}

function DefaultPage({
  p,
  updatePage,
  updateIsLoggedIn,
}: {
  p: any;
  updatePage: any;
  updateIsLoggedIn: any;
}) {
  switch (p) {
    case "LandingPage":
      return (
        <LandingPage
          updatePage={updatePage}
          updateIsLoggedIn={updateIsLoggedIn}
        ></LandingPage>
      );
    case "DashBoard":
      return <Dashboard></Dashboard>;
    default:
      console.log("Error");
  }
  if (p === "LandingPage") {
    return (
      <LandingPage
        updatePage={updatePage}
        updateIsLoggedIn={updateIsLoggedIn}
      ></LandingPage>
    );
  }
  if (p === "Dashboard") {
    return <Dashboard></Dashboard>;
  }
}

export default App;
