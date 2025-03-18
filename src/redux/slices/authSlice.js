import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../api/api';
// Async action for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const response = await API.post('/login', {email, password});
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
