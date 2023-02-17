


import axios from "axios"
import React, { useEffect, useState, useRef, useCallback } from "react"
import styles from '../styles/global.css'

const Results = () => {
    const [users, setUsers] = useState([])
    const [cbQuery, setcbQuery] = useState()
    const [searchQuery, setSearchQuery] = useState();

    const searchQueryRef = useRef();

    const handleClick = (e) => {
        setcbQuery(searchQuery);
    }

    const fetchData = useCallback( () => {

        axios.get("https://api.newscatcherapi.com/v2/search", {

            params: { q: searchQuery, lang: 'en', sort_by: 'relevancy', page: '1' },
            headers: {
                'x-api-key': 'Y4k5lVaO7jb2BXO7Me4GWzK0bscHTsLr5sXpXHfm2pE'

            }
        }).then(response => {
            setUsers(response.data.articles)
        }).then(function (response) { console.log(users) })
    });

    useEffect(() => {
        fetchData()
    },[cbQuery])

    return (
        <>
        <div className="search">
      
        <label>
          Type what you want to search for: <br />
          <input name="myInput" ref={searchQueryRef} onChange={() => {setSearchQuery(searchQueryRef.current.value)}} />
        </label>
        <button onClick={handleClick}>
            SEARCH
        </button>

    </div>
        <div>
            {users.length > 0 && (
                <ul className={styles.cardContainer}>
                    {users.map(user => (
                        <div className={styles.eachCard}><li key={user._id}>
                        <br />{user.media}<br />
                        <strong>Yazar: {user.author}</strong> <br />
                        {user.title} <br />
                        {user.rights} <br />
                        {user.authors} <br />
                        {user.published_date} <br />
                        {user.summary} <br />
                        {user.rank} <br />
                        {user.link} <br />
                        </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
        </>
    )
}

export default Results



// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import styles from '../styles/global.css'

// const Results = () => {
//     const [users, setUsers] = useState([])
//     const [searchQuery, setSearchQuery] = useState('Rihanna');

//     function handleSubmit(e) {
//         Prevent the browser from reloading the page
//         e.preventDefault();
    
//         console.log(searchQuery);
//       }

//     const fetchData = () => {

//         axios.get("https://api.newscatcherapi.com/v2/search", {

//             params: { q: searchQuery, lang: 'en', sort_by: 'relevancy', page: '1' },
//             headers: {
//                 'x-api-key': 'BE0JBUa_rjYW3-5M8ZLqPxyH6OEER0e3Zbj_BPVcU-Y'

//             }
//         }).then(response => {
//             setUsers(response.data.articles)
//         }).then(function (response) { console.log(users) })
//     }

//     useEffect(() => {
//         fetchData()
//     },[searchQuery])

//     return (
//         <>
//         <div className="search">
//       <form method="post" onSubmit={handleSubmit} >
//         <label>
//           Type what you want to search for: <br />
//           <input name="myInput" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} defaultValue="Obama calls Putin" />
//         </label>
//       </form>
//     </div>
//         <div>
//             {users.length > 0 && (
//                 <ul className={styles.cardContainer}>
//                     {users.map(user => (
//                         <div className={styles.eachCard}><li key={user._id}>
//                         <br />{user.media}<br />
//                         <strong>Yazar: {user.author}</strong> <br />
//                         {user.title} <br />
//                         {user.rights} <br />
//                         {user.authors} <br />
//                         {user.published_date} <br />
//                         {user.summary} <br />
//                         {user.rank} <br />
//                         {user.link} <br />
//                         </li>
//                         </div>
//                     ))}
//                 </ul>
//             )}
//         </div>
//         </>
//     )
// }

// export default Results

