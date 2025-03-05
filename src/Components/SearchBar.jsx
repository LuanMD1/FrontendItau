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
    <div className="input-group">
        <input type="text"
          className="input-search col-md-6 col-sm-6"
           placeholder="Buscar por marca/modelo"
            aria-label="Buscar por marca"
            value={searchInput}
            onChange={handleInputChange}
         />
        <button className="btn btn-search" type="button" onClick={handleSearch}><FaSearch /></button>
    </div>
    );
}