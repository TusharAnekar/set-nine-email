import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakefetch";

export const DataContext = createContext()

export function DataProvider ({children}) {

    const [emails, setEmails] = useState([])
    const [sentEmails, setSentEmails] = useState([])

    async function getEmails () {
        try {
            const {status, data: {emails, sentEmails}} = await fakeFetch("https://example.com/api/allemails")
            if(status === 200) {
                setEmails(emails)
                setSentEmails(sentEmails)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getEmails()
    }, [])

    return(
        <>
        <DataContext.Provider value={{emails, setEmails, sentEmails}}>
            {children}
        </DataContext.Provider>
        </>
    )
}