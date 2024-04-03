import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean,
  isInitialized: boolean,
  initial: any,
  user: any
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  initial: "init",
  user: null
}

export const AuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    INITIALIZE: (state: any, action: any): any=> {
      const {isAuthenticated, user} = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user
      };
    },
    INITIAL: (state: any, action: any): any => {
      return {
        ...state, 
        initial: action.payload
      }
    },
    LOGIN: (state: any, action: any) :any=> {
      const user = action.payload;
        return {
          ...state,
          isAuthenticated: true,
          user
        };
    
    },
    LOGOUT: (state: any):any => ({
      ...state,
      isAuthenticated: false,
      user: null
    }),
    REGISTER: (state: any, action: any): any => {
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
export const { INITIALIZE, INITIAL, LOGIN, REGISTER, LOGOUT }: any = AuthSlice.actions
export const reducer = AuthSlice.reducer;

export default AuthSlice