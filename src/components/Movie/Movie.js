import React, { Component } from "react";
import FourColGrid from "../Common/FourColGrid";
import Spinner from "../Common/Spinner";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import Actor from "../Actor/Actor";

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
    const actorGrid = this.state.actors.map((element, index) => {
      return (
        <Actor
          key={index}
          name={element.name}
          character={element.character}
          image={
            element.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.profile_path}`
              : "images\no_image.jpg"
          }
        />
      );
    });
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
            <FourColGrid movies={actorGrid} message="Cast" />
          </React.Fragment>
        )}
      </div>
    );
  }
}
