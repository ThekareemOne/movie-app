import React, { Component } from "react";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE
} from "../../config";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import FourColGrid from "../Common/FourColGrid";
import Spinner from "../Common/Spinner";
import LoadMore from "../LoadMore/LoadMore";
import "./Home.css";

export default class Home extends Component {
  state = {
    movies: [],
    featuredMovie: null,
    loading: true,
    currentPage: 0,
    totalPages: 0
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          featuredMovie: this.state.featuredMovie || result.results[10],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

  loadMoreMovies() {
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${this
      .state.currentPage + 1}`;
    this.fetchItems(endpoint);
  }

  render() {
    let featuredMovieContent;

    if (this.state.loading) {
      featuredMovieContent = <Spinner />;
    } else {
      featuredMovieContent = (
        <FeaturedMovie
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
            this.state.featuredMovie.backdrop_path
          }`}
          title={this.state.featuredMovie.original_title}
          text={this.state.featuredMovie.overview}
        />
      );
    }
    return (
      <div className="home">
        <div>{featuredMovieContent}</div>
        <FourColGrid />
        <LoadMore />
      </div>
    );
  }
}