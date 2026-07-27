import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" ">
      <aside className="w-64 bg-red-200 h-screen p-4">
        {/* <h1 className="text-lg font-bold"> Sidebar </h1> */}

        <nav className="flex flex-col">
          <NavLink to="/dashboard"> Dashboard </NavLink>
          <NavLink to="/orders"> Orders </NavLink>
          <NavLink to="/products"> Product </NavLink>
          <NavLink to="/setting"> Setting </NavLink>
          <NavLink to="/users"> User </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
