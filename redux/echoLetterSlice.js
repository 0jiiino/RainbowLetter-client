import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEchoLetters } from "../api/letterApi";

export const fetchEchoLetters = createAsyncThunk(
  "getEchoLetters",
  async (thunkAPI) => {
    try {
      const response = await getEchoLetters();

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
  letters: [],
  message: "",
  isLoading: false,
};

export const echoLetterSlice = createSlice({
  name: "echoLetter",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEchoLetters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchEchoLetters.fulfilled]: (state, { payload }) => {
      const { letters } = payload;

      state.letters = letters;
      state.isLoading = false;
    },
    [fetchEchoLetters.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
  },
});
