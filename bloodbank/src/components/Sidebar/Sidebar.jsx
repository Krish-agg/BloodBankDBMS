
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-80 bg-gray-900 text-white p-4 flex flex-col shadow-lg">
      <h2 className="text-2xl font-bold mb-6 ml-12 text-white">BloodBank</h2>
      <div className="flex flex-col gap-4 scroll-y overflow-y-auto">
        {Array.from({ length: 18 }).map((_, i) => (
          <div className="mt-4" key={i}>
          <button className="w-full">
          <NavLink
            key={i}
            to={`/${i+1}`}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            Form {i + 1}
          </NavLink>
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
