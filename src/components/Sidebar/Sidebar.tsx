import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { navigation } from "../../config/navigation";

const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);

  const sidebarItems = navigation.filter((item) => {
    return user?.role && item.roles.includes(user.role);
  });

  return (
    <div className="h-full">
      <aside className="w-64 bg-red-200 h-full p-4 ">
        <nav className="flex flex-col">
          {sidebarItems.map((item) => {
            return (
              <>
                <NavLink to={item.path}> {item.title} </NavLink>
              </>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
