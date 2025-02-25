import { NavLink } from "react-router-dom";

const UseNavLink = ({ title, to, icon }) => {
  return (
    <div className="w-max text-start rounded-md">
      <NavLink
        className={({ isActive }) =>
          `w-max hover:text-blue-500 font-semibold transition-all duration-300 flex items-center md:text-base ${
            isActive ? "text-blue-500 font-semibold" : ""
          }`
        }
        to={to}
      >
        <span className="mr-1">{icon}</span>
        {title}
      </NavLink>
    </div>
  );
};

export default UseNavLink;
