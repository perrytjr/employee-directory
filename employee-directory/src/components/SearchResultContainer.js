import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Header from "./Header/header";

class SearchResultContainer extends Component {
  state = {
    employees: [],
    search: "",
    results: [],
    order: ""

  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.search();
  }

  search = query => {
    API.getUsers(query)
      .then(res => {
        this.setState({ employees: res.data.results })
        this.setState({ results: res.data.results })
  })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const employees = this.state.employees;
    const userChoice = event.target.value;
    const results = employees.filter(employee => employee.name.first.toLowerCase().indexOf(userChoice.toLowerCase()) > -1)
    this.setState({
      results
  })
};


sortName = () => {
  const filtered = this.state.results;
  if (this.state.order === "asc") {
      const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
      console.log(sorted);
      this.setState({
          results: sorted,
          order: "desc"
      })
  } else {
      const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
      console.log(sorted);
      this.setState({
          results: sorted,
          order: "asc"
      })
  }
};

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results}
         sortName={this.sortName}
         />
      </div>
    );
  }
}

export default SearchResultContainer;
