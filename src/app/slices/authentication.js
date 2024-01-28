import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  initial: "init",
  user: null
}

export const AuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    INITIALIZE: (state, action)=> {
      const {isAuthenticated, user} = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user
      };
    },
    INITIAL: (state, action) => {
      return {
        ...state, 
        initial: action.payload
      }
    },
    LOGIN: (state, action) => {
      const user = action.payload;
        return {
          ...state,
          isAuthenticated: true,
          user
        };
    
    },
    LOGOUT: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null
    }),
    REGISTER: (state, action) => {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const { INITIALIZE, INITIAL, LOGIN, REGISTER, LOGOUT } = AuthSlice.actions
export const reducer = AuthSlice.reducer;

export default AuthSlice