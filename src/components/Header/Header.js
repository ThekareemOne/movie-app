import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./Header.css";
import {
  API_KEY,
  API_URL,
} from "../../config";

class Header extends Component {
  state = {
    id: null
  }

  getRandom = () => {
    const endpoint = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }
  fetchItems = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
        const id = Math.floor(Math.random() * result.id) + 1;
        console.log(id);
        const movieEndpoint =  `${API_URL}movie/${
          id
        }?api_key=${API_KEY}&append_to_response=credits`;
        this.checkMovie(movieEndpoint);
      });
  };

  checkMovie = endpoint => {
    fetch(endpoint)
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        if(json.status_code === 34 || json.adult || json.poster_path === null){
          this.getRandom();
        }
        else{
          this.props.history.push(`/${json.id}`);
        }
  });
}

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark header">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            MovieApp
          </Link>
        </div>
        <div>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.getRandom}>
                RANDOM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default withRouter(Header);