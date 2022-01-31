import React, { useState } from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {

  const handleSearch = (event) => {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearch} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
