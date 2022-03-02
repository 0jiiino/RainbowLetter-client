import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nickname: "",
  angel: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;

      if (user?.angel) {
        state.angel = user.angel;
      }

      state.id = user.id;
      state.nickname = user.nickname;

      return state;
    },
  },
});
