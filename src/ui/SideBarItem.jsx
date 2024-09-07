import { NavLink } from "react-router-dom";

function SideBarItem({ icon = null, to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className="flex items-center justify-center gap-2 text-sm font-[550] text-stone-600 hover:bg-purple-300 rounded-md px-12 py-1"
      >
        {icon}

        <span>{children}</span>
      </NavLink>
    </li>
  );
}

export default SideBarItem;
