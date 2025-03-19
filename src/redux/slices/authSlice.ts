import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import API from '../../api/api';

// Define types for authentication state
interface User {
  id: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Define types for login payload and response
interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
  email: string;
  token: string;
}

// Async action for login
export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  {rejectValue: string}
>('auth/loginUser', async ({email, password}, {rejectWithValue}) => {
  try {
    const response = await API.post<LoginResponse>('/login', {email, password});
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.user = action.payload;
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
