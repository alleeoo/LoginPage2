import data from "../../data/data";
import { User } from "../../type";
export default function checkValidity(
  credentials: User,
  updateIsLoggedIn: any
): string {
  console.log(credentials);
  for (let i = 0; i < data.length; i++) {
    let people = data[i];
    if (
      people.username === credentials.username &&
      people.password === credentials.password
    ) {
      debugger;
      console.log("Logged In");
      localStorage.setItem("isLoggedIn", "true");
      updateIsLoggedIn(true);
      return "Dashboard";
    }
  }
  return "LandingPage";
}
