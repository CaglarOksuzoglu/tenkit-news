import axios from 'axios'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import styles from '../styles/global.css'
import { useContext } from 'react'

import AppLevelContext from '../context/AppLevelContext'

const Results = () => {
  const { filters, darkmode } = useContext(AppLevelContext)
  const [users, setUsers] = useState([])
  const [selectedNews, setSelectedNews] = useState([])
  const [cbQuery, setcbQuery] = useState()
  const [searchQuery, setSearchQuery] = useState()

  const handleFilterChange = () => {
    if (filters !== 'all') {
      let selectedNews = users.filter((user) => user.rating === filters)
      setSelectedNews(selectedNews)
    } else {
      setSelectedNews(users)
    }
  }

  useEffect(() => {
    handleFilterChange()
  }, [filters, users])

  const searchQueryRef = useRef()

  const handleClick = (e) => {
    setcbQuery(searchQuery)
  }

  const fetchData = useCallback(() => {
    axios
      .get('https://api.newscatcherapi.com/v2/search', {
        params: { q: searchQuery, lang: 'tr', sort_by: 'relevancy', page: '1' },
        headers: {
          'x-api-key': 'AV-NEW8UXczSbUiFm5lL8jGHuZ-uaiv9cl_ZxB2iUTo',
        },
      })
      .then((response) => {
        let data = response.data.articles

        data.map((item) => {
          if (item.rights === 'haberler.com') {
            item.rating = '10'
          }
        })
        setUsers(data)
      })
  })

  useEffect(() => {
    fetchData()
  }, [cbQuery])

  return (
    <>
      <div className='search'>
        <label>
          Type what you want to search for: <br />
          <input
            name='myInput'
            ref={searchQueryRef}
            onChange={() => {
              setSearchQuery(searchQueryRef.current.value)
            }}
          />
        </label>
        <button onClick={handleClick}>SEARCH</button>
      </div>
      <div className={`newsList ${darkmode ? "darkactive" : "darkinactive"}`}>
        {users.length > 0 && (
          <ul className={styles.cardContainer}>
            {selectedNews.map((user) => (
                <li key={user._id}>
                  <br />
                  {user.media}
                  <br />
                  <strong>Yazar: {user.author}</strong> <br />
                  {user.title} <br />
                  {user.rights} <br />
                  {user.authors} <br />
                  {user.published_date} <br />
                  {user.summary} <br />
                  {user.rank} <br />
                  {user.link} <br />
                </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Results
