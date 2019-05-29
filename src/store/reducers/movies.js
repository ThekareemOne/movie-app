const initialState = {
  movies: [],
  featuredMovie: null,
  loading: true,
  currentPage: 0,
  totalPages: 0,
  searchTerm: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
