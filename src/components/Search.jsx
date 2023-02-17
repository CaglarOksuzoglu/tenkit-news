import React, { useState } from 'react';

const Search = () => {


  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    console.log(searchQuery);
  }

  return (
    <div className="search">
      <form method="post" onSubmit={handleSubmit} >
        <label>
          Type what you want to search for: <br />
          <input name="myInput" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} defaultValue="Obama calls Putin" />
        </label>
      </form>
    </div>
  )
}

export default Search