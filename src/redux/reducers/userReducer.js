import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  loggedIn: false,
  authData: null,
};

export const UserSliceReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },

    setUserData: (state, {payload}) => {
      state.authData = {
        email: payload.email,
        password: payload.password,
      };

      state.loggedIn = true;
    },

    logout: () => initialState,
  },
});

export default UserSliceReducer.reducer;
export const UserSliceAction = UserSliceReducer.actions;
