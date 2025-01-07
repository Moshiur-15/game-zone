import { NavLink } from "react-router-dom";

const UseNavLink = ({ title, to }) => {
  return (
    <div className="inline-block w-max text-start px-6 lg:px-0 rounded-md">
      <NavLink
        className={({ isActive }) =>
          `md:text-base w-max ${
            isActive ? "text-blue-500 underline font-semibold" : ""
          }`
        }
        to={to}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default UseNavLink;
