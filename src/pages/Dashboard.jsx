// import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

// import Cookies from "js-cookie";

function Dashboard() {
  const { user } = useUser();

  // console.log(user);
  return <div>dashboard {user}</div>;
}

export default Dashboard;
