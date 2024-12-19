import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestMovies, requestMovie } from '@/services/movies';

const initialState = {
  list: [],
  data: {},
  searchResult: [],
  isLoaded: false,
  error: null,
  limit: 10,
  pageCount: null,
  ordering: 'date'
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (params = {}, { getState }) => {
  const limit = getState().movies.limit;
  const offset = limit * (params.currentPage - 1);
  const data = await requestMovies({
    limit, offset, ...params,
    ordering: params.ordering || getState().movies.ordering
  });

  return data;
});

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (movieId) => {
  const data = await requestMovie(movieId);

  return data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    favorite: (state, action) => {
      const movieId = action.payload;
      const movieIndex = state.list.findIndex((movie) => movie.id === movieId);
      state.list[movieIndex].isFavorite = true;
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload;
      const movieIndex = state.list.findIndex((movie) => movie.id === movieId);
      state.list[movieIndex].isFavorite = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.list = action.payload;
        state.pageCount = Math.ceil(action.payload.count / state.limit);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovie.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
});

export const { favorite, removeFavorite } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
