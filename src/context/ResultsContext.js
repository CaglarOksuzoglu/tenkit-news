import {createContext, useState, useContext} from 'react'
import axios from 'axios'
import AppLevelContext from './AppLevelContext'

export const ResultsContext = createContext()

export const ResultsProvider = ({children}) => {
  const {filters} = useContext(AppLevelContext)
  const [news, setNews] = useState([])
  const [selectedNews, setSelectedNews] = useState([])
  const [searchQuery, setSearchQuery] = useState()

  const handleFilterChange = () => {
    if (filters !== 'all') {
      let selectedNews = news.filter((singleNews) => singleNews.rating === filters)
      setSelectedNews(selectedNews)
    } else {
      setSelectedNews(news)
    }
  }

  // GET ALL NEWS
  const getAllNews = async () => {
    await axios
      .get('https://api.newscatcherapi.com/v2/search', {
        params: {q: searchQuery, lang: 'tr', sort_by: 'relevancy', page: '1'},
        headers: {
          'x-api-key': 'RSp_B6f-x3OXVYmmgMUZG0d65WL3ZMC8UDuKiTwS-Qo',
        },
      })
      .then((response) => {
        let data = response.data.articles

        data.map((item) => {
          if (item.rights === 'haberler.com') {
            item.rating = '10'
          }
        })
        setNews(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ResultsContext.Provider
      value={{
        news,
        setNews,
        selectedNews,
        handleFilterChange,
        searchQuery,
        setSearchQuery,
        getAllNews,
      }}
    >
      {children}
    </ResultsContext.Provider>
  )
}

export default ResultsContext
