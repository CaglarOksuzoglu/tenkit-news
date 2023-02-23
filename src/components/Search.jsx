import React, {useState} from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='search'>
      <form method='post'>
        <label>
          Type what you want to search for: <br />
          <input
            name='myInput'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            defaultValue='Obama calls Putin'
          />
        </label>
      </form>
    </div>
  )
}

export default Search
