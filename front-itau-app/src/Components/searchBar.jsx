import React from "react";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {

    function handleSearch() {
        console.log("teste")
      }

    return (
    <div class="input-group mb-3">
        <input type="text" class="form-control" className="input-search" placeholder="Buscar por marca" aria-label="Buscar por marca" />
        <button class="btn btn-search" onClick={() => handleSearch()} type="button"><FaSearch /></button>
    </div>
    );
}