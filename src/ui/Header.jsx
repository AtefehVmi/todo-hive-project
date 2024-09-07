import { useUser } from "../features/authentication/useUser";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Header({ toggleSideBar, isSideBarOpen }) {
  const { user } = useUser();
  const { firstName, profilePicture } = user;

  return (
    <div className="bg-purple-200 py-3 px-3 gap-3 flex justify-end flex-row-reverse border-b-2 border-purple-400">
      <span className="text-sm text-stone-600 font-semibold tracking-tight flex justify-center items-center">
        {firstName}
      </span>
      <img
        src={profilePicture || "../public/pic.jpg"}
        className=" block w-8 h-8 border-[0.1rem] border-purple-500 rounded-[50%] bg-purple-500"
      />

      <button
        className=" text-purple-500 text-2xl border-2 border-purple-500 rounded-md h-8 w-8 flex items-center justify-center"
        onClick={toggleSideBar}
      >
        {isSideBarOpen ? <IoClose /> : <HiMenu />}
      </button>
    </div>
  );
}

export default Header;
