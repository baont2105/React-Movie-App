import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="" />
        <input
          type="text"
          placeholder="Search your favorite movies"
          value={searchTerm}
          onChange={(event  ) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
