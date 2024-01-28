import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const SideBarSlice = createSlice({
  name: 'sidebarslice',
  initialState,
  reducers: {
    TOGGLE_SIDEBAR: (state, action)=> {
      const { isOpen } = action.payload;
      return {
        ...state,
        isOpen,
      };
    },
  },
})

// Action creators are generated for each case reducer function
export const { TOGGLE_SIDEBAR } = SideBarSlice.actions
export const reducer = SideBarSlice.reducer;

export default SideBarSlice