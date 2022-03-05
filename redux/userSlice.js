import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAngelLetters,
  patchAngel,
  postLetter,
  postNewAngel,
} from "../api/angelApi";

export const fetchNewAngel = createAsyncThunk(
  "postNewAngel",
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

export const fetchLetters = createAsyncThunk(
  "getLetters",
  async (id, thunkAPI) => {
    try {
      const response = await getAngelLetters(id);

      if (!response.error) {
        return response;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAngel = createAsyncThunk(
  "patchAngel",
  async (id, thunkAPI) => {
    try {
      const response = await patchAngel(id);

      if (!response.error) {
        return response;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLetter = createAsyncThunk(
  "postLetter",
  async (letterInfo, thunkAPI) => {
    try {
      const response = await postLetter(letterInfo);

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
  letters: [],
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
      state.isLoading = false;
    },
    [fetchNewAngel.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
    [fetchLetters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchLetters.fulfilled]: (state, { payload }) => {
      const { letters } = payload;

      state.letters = letters;
      state.isLoading = false;
    },
    [fetchLetters.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
    [fetchAngel.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAngel.fulfilled]: (state) => {
      state.angel = {};
      state.isLoading = false;
    },
    [fetchAngel.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
    [fetchLetter.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchLetter.fulfilled]: (state, { payload }) => {
      const { letter } = payload;

      state.letters.push(letter);
      state.isLoading = false;
    },
    [fetchLetter.rejected]: (state, { payload }) => {
      const { error } = payload;

      state.message = error.message;
      state.isLoading = false;
    },
  },
});
