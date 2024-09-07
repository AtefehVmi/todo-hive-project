// import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

function Dashboard() {
  const { user } = useUser();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!_at) {
  //     // Cookies.remove("_at");
  //     navigate("/login");
  //   }
  //   // Get a cookie
  //   // // Remove a cookie
  //   // Cookies.remove('myCookieName');
  // }, [navigate]);

  console.log(user);
  return <div className="bg-purple-100 h-full">dashboard</div>;
}

export default Dashboard;
