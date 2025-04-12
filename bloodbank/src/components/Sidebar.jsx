
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">BloodBank</h2>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="mt-4" key={i}>
          <button className="w-full">
          <NavLink
            key={i}
            to={`/#`}
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
