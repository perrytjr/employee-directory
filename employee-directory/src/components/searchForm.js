import React from "react";
// css eventualy
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;