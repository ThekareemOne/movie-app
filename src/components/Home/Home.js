import React, { Component } from "react";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  NO_IMAGE
} from "../../config";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import FourColGrid from "../Common/FourColGrid";
import Spinner from "../Common/Spinner";
import LoadMore from "../LoadMore/LoadMore";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./Home.css";
import Searchbar from "../Searchbar/Searchbar";

export default class Home extends Component {
  state = {
    movies: [],
    featuredMovie: null,
    loading: true,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
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
          featuredMovie: this.state.featuredMovie || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

  loadMoreMovies = () => {
    this.setState({
      loading: true
    });
    let endpoint;

    if (this.state.searchTerm == "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  searchItems = searchTerm => {
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });
    if (searchTerm == "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  render() {
    let featuredMovieContent;

    if (this.state.loading) {
      featuredMovieContent = null;
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
    const movieGrid = this.state.movies.map((element, index) => {
      return (
        <MovieThumb
          key={index}
          movieId={element.id}
          movieName={element.original_title}
          image={
            element.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
              : { NO_IMAGE }
          }
        />
      );
    });

    return (
      <div className="home">
        <div>{featuredMovieContent}</div>
        <div className="container">
          <Searchbar callback={this.searchItems} />
          <FourColGrid movies={movieGrid} message="Popular Movies" />
          {this.state.loading ? (
            <Spinner />
          ) : this.state.currentPage < this.state.totalPages ? (
            <LoadMore onClick={this.loadMoreMovies} text="Load More" />
          ) : null}
        </div>
      </div>
    );
  }
}
