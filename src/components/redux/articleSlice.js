import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    data: {}
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { getData } = articleSlice.actions;

export const selectData = ({article}) => article.data;

export default articleSlice.reducer;
