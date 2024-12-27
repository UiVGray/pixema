import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestMovies, requestMovie, requestPopularMovies, requestMoviesBySearch } from '@/services/movies';
import { IStateProps } from '@/types/types';

const initialState: IStateProps = {
  list: [],
  data: undefined,
  listPopular: [],
  searchResult: [],
  isLoaded: false,
  error: undefined,
  limit: 10,
  pageCount: 0,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page: string, { rejectWithValue }) => {
  try {
    const data = await requestMovies(page);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (movieId: string, { rejectWithValue }) => {
  try {
    const data = await requestMovie(movieId);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async (page: string, { rejectWithValue }) => {
  try {
    const data = await requestPopularMovies(page);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchMoviesBySearch = createAsyncThunk(
  'movies/fetchMoviesBySearch',
  async ([page, encodedQuery]: [string, string], { rejectWithValue }) => {
    try {
      const data = await requestMoviesBySearch(page, encodedQuery);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoaded = false;
        state.error = undefined;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.list = [...state.list, ...action.payload.docs];
        state.pageCount = action.payload.pages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovie.pending, (state) => {
        state.isLoaded = true;
        state.error = undefined;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.isLoaded = false;
        state.error = undefined;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.listPopular = [...state.listPopular, ...action.payload.docs];
        state.pageCount = action.payload.pages;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.isLoaded = false;
        state.error = undefined;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.searchResult = [...state.searchResult, ...action.payload.docs];
        state.pageCount = action.payload.pages;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
  }
});

export const moviesReducer = moviesSlice.reducer;
