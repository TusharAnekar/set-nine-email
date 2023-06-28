import { useContext } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../contexts/data-context";

export function EmailMessage() {
  const { emailId } = useParams();
  const { emails, sentEmails } = useContext(DataContext);

  const email = emails.find(({ id }) => id === Number(emailId));

  const sentEmail = sentEmails.find(({ id }) => id === Number(emailId));

  return (
    <>
      {email ?? 0 ? (
        <div>
          <h2>{email.subject}</h2>
          <p>From: {email.sender}</p>
          <p>Message: {email.message}</p>
        </div>
      ) : (
        <div>
          <h2>{sentEmail.subject}</h2>
          <p>From: {sentEmail.sender}</p>
          <p>Message: {sentEmail.message}</p>
        </div>
      )}
    </>
  );
}
