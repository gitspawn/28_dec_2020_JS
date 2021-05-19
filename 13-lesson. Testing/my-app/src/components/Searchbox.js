import React, { useState } from 'react';
import SearchButton from './SearchButton';

export default function Searchbox({ requestSerch }) {
  let [query, setQuerty] = useState();

  let searchClick = () => {
    if (query) {
      requestSerch(query);
    }
  };

  let updateQuery = (event) => {
    setQuerty(event.target.value);
  };

  return (
    <div>
      <input type="text" name="search" value={query} placeholder="Type to search" onChange={updateQuery} />
      <SearchButton data-testid="search-btn" onCLickProp={searchClick} />
    </div>
  );
}
