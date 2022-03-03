import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { postNewAngel } from "../api/letter.Api";

export const fetchNewAngel = createAsyncThunk(
  "angel",
  async (creationInfo, thunkAPI) => {
    try {
      const response = await postNewAngel(creationInfo);

      if (!response.error) {
        return response;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  id: "",
  nickname: "",
  angel: {},
  message: "",
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;

      state.id = user.id;
      state.nickname = user.nickname;

      if (user?.angel) {
        state.angel = user.angel;
      }

      return state;
    },
  },
  extraReducers: {
    [fetchNewAngel.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNewAngel.fulfilled]: (state, { payload }) => {
      const { angel } = payload;

      state.angel = angel;
    },
    [fetchNewAngel.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
  },
});
