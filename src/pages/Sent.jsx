import { useContext } from "react";
import { DataContext } from "../contexts/data-context";
import { NavLink } from "react-router-dom";

export function Sent() {
  const { sentEmails } = useContext(DataContext);
  
  return (
    <>
      <h2>Sent Emails</h2>
      <ul>
        {sentEmails.map(({ id, subject }) => (
          <li key={id}>
            <NavLink to={`/sent/${id}`}>{subject}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
