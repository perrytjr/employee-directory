import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Header from "./header";

class SearchResultContainer extends Component {
  state = {
    employees: [],
    search: "",
    results: [],

  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.search();
  }

  search = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
  };

  render() {
    return (
      <div>
        <Header/>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
