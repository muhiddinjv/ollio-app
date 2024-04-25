import React, { createContext, useContext, useReducer } from 'react';

// Define the shape of your global state
interface GlobalState {
  itemIds: string[];
  visible: boolean;
  user: { name: string; loggedIn: boolean };
  // Add other global state requirements here
}

// Define actions for the reducer
type Action =
  | { type: 'SET_ITEM_IDS'; payload: string[] }
  | { type: 'TOGGLE_VISIBILITY'; payload: boolean }
  | { type: 'SET_USER'; payload: { name: string; loggedIn: boolean } }
  // Add other actions here

// Initial state
const initialState: GlobalState = {
  itemIds: [],
  visible: false,
  user: { name: '', loggedIn: false },
};

// Create the context
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null, // default function
});

// Reducer function to manage state updates
const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'SET_ITEM_IDS':
      return { ...state, itemIds: action.payload };
    case 'TOGGLE_VISIBILITY':
      return { ...state, visible: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    // Handle other actions
    default:
      return state;
  }
};

export const GlobalState: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const contextValue = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook to use the global context
export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalState');
  }
  return context;
};