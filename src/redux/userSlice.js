import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../lib/Axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userData) => {
    let response = await Axios.post("/users/login", userData);
    return {
      user: response.data.userObj,
      token: response.data.token,
    };
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.username = action.payload.user.username
            state.email = action.payload.user.email
            state.password = action.payload.user.password
        })
    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;
