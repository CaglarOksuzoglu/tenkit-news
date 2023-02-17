import axios from "axios"
import React, { useEffect, useState, createContext } from "react"

export const MyContextData = createContext(null); // null is the default value

export const MyContext = (props) => {

    const [users, setUsers] = useState([])

    // const fetchData = () => {

    //     axios.get("https://api.newscatcherapi.com/v2/search", {

    //         params: { q: 'messi', lang: 'tr', sort_by: 'relevancy', page: '1' },
    //         headers: {
    //             'x-api-key': 'TRwWKJQ9wGnATe1xH4JxtiOVjSl9NDJhw2VxhRtuG2E'

    //         }
    //     }).then(response => {
    //         setUsers(response.data.articles)
    //     }).then(function(response) { console.log(users) })
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return ( <
        div >
        <
        MyContextData.Provider value = { users } > { props.children } <
        /MyContextData.Provider>

        <
        /div>
    );
};