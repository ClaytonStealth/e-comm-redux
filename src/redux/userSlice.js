import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../lib/Axios";
import { authSuccess } from "./authSlice";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userData, thunkAPI) => {
    let response = await Axios.post("/users/login", userData);
    //remember me button checked
    //isRemember && localStorage.setItem("jwtToken", response.data.token);

    //set token in local storage
    localStorage.setItem("jwtToken", response.data.token);

    //dispatch authSlice- authSuccess
    thunkAPI.dispatch(authSuccess());
    return {
      user: response.data.userObj,
    };
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    let response = await Axios.post("/users/register", userData);
    return {
      user: response.data.userObj,
    };
  }
);
const initialState = {
  username: "",
  email: "",
  password: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state.password = action.payload.user.password;
        state.email = action.payload.user.email;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.username = "";
        state.password = "";
        state.email = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {});
  },
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
