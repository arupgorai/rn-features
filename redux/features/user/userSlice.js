import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService';

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get all users

export const getUsers = createAsyncThunk('user/getAll', async (_, thunkAPI) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    const msg =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(msg);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export const {reset} = userSlice.actions;
export default userSlice.reducer;
