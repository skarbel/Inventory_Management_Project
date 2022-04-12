import React, { useState, useEffect } from 'react';
import '../Style/Filter.css'

function Filter({handleChange})  {
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    handleChange(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <input className='search-box'
        onChange={changeSearchTerm}
        type="text"
        name="searchTerm"
        placeholder="Search Item"
        value={searchTerm} />
    </form>
  );
}

export default Filter;