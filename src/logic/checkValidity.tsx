import data from "../../data/data";
import { User } from "../../type";
export default function checkValidity(
  credentials: User,
  updateIsLoggedIn: Function,
  updateIsInvalid: Function
): string {
  console.log(credentials);
  for (let i = 0; i < data.length; i++) {
    let people = data[i];
    if (
      people.username === credentials.username &&
      people.password === credentials.password
    ) {
      // console.log("Logged In");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", credentials.username);
      updateIsLoggedIn(true);
      return "Dashboard";
    }
  }
  updateIsInvalid(true);
  return "LandingPage";
}
