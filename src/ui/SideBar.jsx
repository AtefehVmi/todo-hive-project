import { AiFillHome } from "react-icons/ai";
import SideBarItem from "./SideBarItem";
import { IoSettingsSharp } from "react-icons/io5";

function SideBar() {
  return (
    <nav className=" bg-purple-200 border-2 border-purple-400 w-48 rounded-md fixed flex justify-center items-start h-5/6 shadow-2xl">
      <ul className="py-2 flex flex-col">
        <SideBarItem to="/dashboard" icon={<AiFillHome />}>
          Home
        </SideBarItem>
        <SideBarItem to="/settings" icon={<IoSettingsSharp />}>
          Settings
        </SideBarItem>
      </ul>
    </nav>
  );
}

export default SideBar;
