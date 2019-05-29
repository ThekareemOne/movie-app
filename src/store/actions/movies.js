import {
  FETCH_MOVIES,
  LOAD_MORE_MOVIES,
  SEARCH_MOVIES,
  SET_LOADING
} from "../actions/types";

export const fetchMovies = endpoint => {
  fetch(endpoint)
    .then(res => res.json())
    .then(result => {
      return {
        type: FETCH_MOVIES,
        payload: result
      };
    });
};
