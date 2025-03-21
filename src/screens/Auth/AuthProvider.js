import * as React from "react";
import { setAccessToken, removeAccessToken } from "./astorage";

const AuthContext = React.createContext({
  status: "idle",
  userToken: null,
  signIn: () => {},
  signOut: () => {},
});

// In case you want to use Auth functions outside React tree
export const AuthRef = React.createRef();

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be inside an AuthProvider with a value");
  }
  return context;
};

export const AuthProvider = ({ children, navigation }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, {
    status: "idle",
    userToken: null,
  });

  React.useImperativeHandle(AuthRef, () => authActions);

  const authActions = React.useMemo(
    () => ({
      signIn: async (token) => {
        dispatch({ type: "SIGN_IN", token });
        await setAccessToken(token);
      },
      signOut: async () => {
        console.log("Signing out...");

        await removeAccessToken();
        dispatch({ type: "SIGN_OUT" });

        // Redirect user to SignIn screen
        navigation.navigate("SignIn");
      },
    }),
    [navigation]
  );

  return (
    <AuthContext.Provider value={{ ...state, ...authActions }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthReducer = (prevState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        status: "signedIn",
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        status: "signedOut",
        userToken: null,
      };
  }
};
