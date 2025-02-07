import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FiSearch } from "react-icons/fi"; // Import search icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Allow Enter key to search
      />
      <button className="search-button" onClick={handleSearch}>
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
