import React, { Component } from "react";
import "./Searchbar.css";

export default class Searchbar extends Component {
  state = {
    value: ""
  };

  timeout = null;
  Search = event => {
    this.setState({
      value: event.target.value
    });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };
  render() {
    return (
      <div>
        <div className="searchbar mt-4 rounded">
          <i className="fa fa-search" />
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search"
            onChange={this.Search}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
