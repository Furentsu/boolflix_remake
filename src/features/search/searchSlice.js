import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    movieSearch: (state = initialState, action) => {
      if (action.type === "search/movieSearch") {
        state.search = action.payload;
      }
    },
  },
});

// export const { movieSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.search;

export default searchSlice.reducer;
