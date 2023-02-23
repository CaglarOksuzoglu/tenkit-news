import {useEffect, useRef} from 'react'
import styles from '../../styles/global.css'
import {useContext} from 'react'
// COMPONENTS
import SingleNews from './components/SingleNews/SingleNews'
// CONTEXT
import AppLevelContext from '../../context/AppLevelContext'
import ResultsContext from '../../context/ResultsContext'

const Results = () => {
  const {news, handleFilterChange, getAllNews, selectedNews, setSearchQuery} =
    useContext(ResultsContext)
  const searchQueryRef = useRef()
  const {filters, darkmode} = useContext(AppLevelContext)

  useEffect(() => {
    handleFilterChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, news])

  return (
    <>
      {/* SEARCH FORM  */}
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
        <button
          onClick={() => {
            getAllNews()
          }}
        >
          SEARCH
        </button>
      </div>
      {/* RESULTS CONTAINER */}
      <div className={`newsList ${darkmode ? 'darkactive' : 'darkinactive'}`}>
        {news.length > 0 && (
          <ul className={styles.cardContainer}>
            {selectedNews.map((singleNews, idx) => (
              <SingleNews singleNews={singleNews} key={idx} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Results
