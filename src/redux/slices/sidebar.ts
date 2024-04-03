import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SidebarState {
  isOpen: boolean,
}

const initialState: SidebarState = {
  isOpen: false,
}

export const SideBarSlice = createSlice({
  name: 'sidebarslice',
  initialState,
  reducers: {
    TOGGLE_SIDEBAR: (state: any, action: any): any=> {
      const { isOpen } = action.payload;
      return {
        ...state,
        isOpen,
      };
    },
  },
})

// Action creators are generated for each case reducer function
export const { TOGGLE_SIDEBAR }: any = SideBarSlice.actions
export const reducer = SideBarSlice.reducer;

export default SideBarSlice