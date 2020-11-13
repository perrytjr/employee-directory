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
    sortType: "asc"

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



sort = (sortType) => {
  if (sortType === "asc") {
    this.setState({employees: this.state.employees.sort(function(a, b) {
        return a.name - b.name
      }), sortType: "asc"
    });
  } else if (sortType === "desc") {
    this.setState({employees: this.state.employees.sort(function(a, b) {
        return b.name - a.name
      }), sortType: "desc"
    });
  }

}
renderSort = () => {
  if (this.state.employees.length > 0
    && this.state.results.length > 0) {
    
  }
}


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
         renderSort={this.renderSort()}
         />
      </div>
    );
  }
}

export default SearchResultContainer;
