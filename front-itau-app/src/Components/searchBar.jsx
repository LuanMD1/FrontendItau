import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';


export default function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    function handleSearch() {
        onSearch(searchInput);
    };

    return (    
    <div class="input-group">
        <input type="text"
          className="input-search"
           placeholder="Buscar por marca ou modelo"
            aria-label="Buscar por marca"
            value={searchInput}
            onChange={handleInputChange}
         />
        <button class="btn btn-search" type="button" onClick={handleSearch}><FaSearch /></button>
    </div>
    );
}