import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import SideBar from "./SideBar";

function AppLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function toggleSideBar() {
    setIsSideBarOpen((Open) => !Open);
  }
  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      <Header toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />

      <div className="flex flex-1 relative">
        {isSideBarOpen && (
          <div className="absolute z-10 h-full top-1 left-4">
            <SideBar />
          </div>
        )}
        <main className="flex-1 z-0 overflow-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
