import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../contexts/data-context";

export function Inbox() {
  const { emails, setEmails } = useContext(DataContext);

  function markAsRead(idToBeRead) {
    setEmails(
      emails.map((email) =>
        email.id === idToBeRead ? { ...email, read: true } : email
      )
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <p>Unread Emails: {emails.filter(({ read }) => !read).length}</p>
      <p>Read Emails: {emails.filter(({ read }) => read).length}</p>

      <ul>
        {emails.map((email) => {
          const { id, subject, read } = email;
          return (
            <li key={id}>
              <NavLink to={`/inbox/${id}`}>{subject}</NavLink>
              {!read && (
                <button onClick={() => markAsRead(id)}>Mark as read</button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
