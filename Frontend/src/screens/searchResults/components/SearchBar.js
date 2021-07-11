
import React from "react";
import "../../.././assets/index.css";

const SearchBar = ({
  name,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (

    <div className="searchBar">
      
      <div
        style={{
          height: "40px",
          display: "flex",
          flexDirection: "row",
          marginTop: "19px",
          marginLeft: "41px",
        }}
      >
        <label htmlFor="header-search" style={{ borderRadius: "20px" }}>
          <span className="visually-hidden">Search for People</span>
        </label>
        <input
          type="text"
          className="header-top_searchBar form-control"
          id="header-search"
          placeholder="Search for People..."
          name="name"
          value={name}
          style={{
            width: "400px",
            height: "40px",
            padding: "5px",
            paddingLeft: "15px",
            borderRadius: "20px",
            border: "1px solid black",
          }}
          onChange={onChangeHandler}
        />
        <button
          className="buttons2"
          value="Search"
          style={{
            height: "40px",
            fontSize: "20px",
            marginLeft: "10px",
          }}
          onClick={onSubmitHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
