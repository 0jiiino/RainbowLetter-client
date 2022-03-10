import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getMailboxAngels, getMailboxLetters } from "../api/angelApi";

export const fetchMailboxAngels = createAsyncThunk(
  "getMailboxAngels",
  async (id, thunkAPI) => {
    try {
      const response = await getMailboxAngels(id);

      if (!response.error) {
        return response;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMailboxLetters = createAsyncThunk(
  "getMailboxLetters",
  async (id, thunkAPI) => {
    try {
      const response = await getMailboxLetters(id);

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
  angels: [],
  letters: [],
  isLoading: false,
  message: "",
};

export const mailboxSlice = createSlice({
  name: "mailbox",
  initialState,
  reducers: {
    delete: (state, action) => {
      const { angels } = state;
      const { id } = action.payload;

      for (let i = 0; i < angels.length; i++) {
        if (angels[i].id === id) {
          angels.splice(i, 1);
          break;
        }
      }

      state.angels = angels;

      return state;
    },
  },
  extraReducers: {
    [fetchMailboxAngels.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMailboxAngels.fulfilled]: (state, { payload }) => {
      const { mailboxAngels } = payload;

      state.angels = mailboxAngels;
      state.isLoading = false;
    },
    [fetchMailboxAngels.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchMailboxLetters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMailboxLetters.fulfilled]: (state, { payload }) => {
      const { letters } = payload;

      state.letters = letters;
      state.isLoading = false;
    },
    [fetchMailboxLetters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
