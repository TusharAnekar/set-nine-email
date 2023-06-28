import { NavLink } from "react-router-dom";

export function Header() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  return (
    <>
      <h1>My Mail Box</h1>
      <ul>
        <li>
          <NavLink to={"/"} style={getActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/inbox"} style={getActiveStyle}>
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sent"} style={getActiveStyle}>
            Sent
          </NavLink>
        </li>
      </ul>
    </>
  );
}
