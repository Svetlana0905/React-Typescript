import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISidebar {
  status: boolean;
}

const initialState: ISidebar = {
  status: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
  },
});

export default sidebarSlice.reducer;
