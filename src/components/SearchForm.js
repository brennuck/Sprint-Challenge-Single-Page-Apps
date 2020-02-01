import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // useEffect(() => {
  //   const results = characters.filter(character => 
  //     character.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  // }, [searchTerm]);

  // useEffect(() => {
  //   const results = props.data.filter(character => 
  //     character.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  // }, [searchTerm])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const results = res.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div>
          {searchResults.map(character => (
            <li key= {character} >{character.name}</li>
          ))}
      </div>
    </section>
  );
}
