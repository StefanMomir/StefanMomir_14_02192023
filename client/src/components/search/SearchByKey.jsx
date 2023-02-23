import React from "react";

const SearchByKey = ({ ...props }) => {
  return (
    <div className="search">
      <label htmlFor="search">
        <p>Search:</p>
      </label>
      <input
        type="text"
        name="keyword"
        id="search"
        onChange={(e) => props.handleFindKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchByKey;
