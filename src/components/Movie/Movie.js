import React, { Component } from "react";
import FourColGrid from "../Common/FourColGrid";
import Spinner from "../Common/Spinner";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import { API_URL, API_KEY } from "../../config";

export default class Movie extends Component {
  state = {
    movie: null,
    actors: [],
    directors: [],
    loading: true
  };
  componentDidMount() {
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/${
      this.props.match.params.id
    }?api_key=${API_KEY}&append_to_response=credits`;
    this.getMovie(endpoint);
  }
  getMovie = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          const directors = result.credits.crew.filter(
            member => member.job === "Director"
          );
          this.setState({
            movie: result,
            actors: result.credits.cast,
            directors,
            loading: false
          });
        }
      });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <MovieInfo
            movie={this.state.movie}
            directors={this.state.directors}
          />
        )}
        <MovieInfoBar />
      </div>
    );
  }
}
