// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   requestSignUp,
//   requestSignIn,
//   requestCurrentUserData,
//   requestAuthActivation
// } from '@/services/auth';
// import { jwt } from '@/utils/jwt';

// const initialState = {
//   userEmail: null,
//   isLoading: false,
//   error: null,
//   isActivated: false,
//   currentUser: null,
//   jwt: jwt.getFromLocalStorage() || null
// }

// export const fetchSignUp = createAsyncThunk(
//   'auth/fetchSignUp',
//   async (body, { rejectWithValue }) => {
//     const data = await requestSignUp(body);

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }

//     return data;
//   }
// );

// export const fetchSignIn = createAsyncThunk(
//   'auth/fetchSignIn',
//   async (body, { rejectWithValue }) => {
//     const data = await requestSignIn(body);

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }

//     jwt.setToLocalStorage(data);

//     return data;
//   }
// );

// export const fetchCurrentUserData = createAsyncThunk(
//   'auth/fetchCurrentUserData',
//   async (jwt, { rejectWithValue }) => {
//     const data = await requestCurrentUserData(jwt);

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }

//     return data;
//   }
// );

// export const fetchAuthActivation = createAsyncThunk(
//   'auth/fetchAuthActivation',
//   async (body, { rejectWithValue }) => {
//     const data = await requestAuthActivation(body);

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }

//     return data;
//   }
// );

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setJWT: (state, action) => {
//       state.jwt = action.payload
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSignUp.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchSignUp.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userEmail = action.payload.email;
//       })
//       .addCase(fetchSignUp.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchSignIn.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchSignIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.jwt = action.payload;
//       })
//       .addCase(fetchSignIn.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchCurrentUserData.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchCurrentUserData.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//       })
//       .addCase(fetchCurrentUserData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchAuthActivation.pending, (state) => {
//         state.isLoading = true;
//         state.isActivated = false;
//         state.error = null;
//       })
//       .addCase(fetchAuthActivation.fulfilled, (state) => {
//         state.isLoading = false;
//         state.isActivated = true;
//       })
//       .addCase(fetchAuthActivation.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//   }
// });

// export const { setJWT } = authSlice.actions;
// export const authReducer = authSlice.reducer;
