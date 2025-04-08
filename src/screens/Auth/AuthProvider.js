import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { setAccessToken, removeAccessToken, getRefreshToken, setRefreshToken, setItem } from "./astorage";
import axiosInstance from "./axiostance";
import {jwtDecode} from "jwt-decode";

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

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [state, dispatch] = React.useReducer(AuthReducer, {
    status: "idle",
    userToken: null,
  });

  React.useImperativeHandle(AuthRef, () => authActions);

  const authActions = React.useMemo(
    () => ({
      signIn: async (phone, password) => {
        try {
          const { data } = await axiosInstance.post("auth/signin", { phone, password });
          const user = jwtDecode(data.accessToken);
          await setItem("user", user);
          await setAccessToken(data.accessToken);
          await setRefreshToken(data.refreshToken);
          dispatch({ type: "SIGN_IN", token: data.accessToken });
        } catch (error) {
          console.error("Error during sign in:", error);
          throw error;
        }
      },
      signOut: async () => {
        console.log("Signing out...");
        const refreshToken = await getRefreshToken();
        try {
          const result = await axiosInstance.post("auth/signout", { refreshToken });
          console.log('Sign out response:', result.data);
          await removeAccessToken();
          dispatch({ type: "SIGN_OUT" });
          navigation.reset({
            index: 0,
            routes: [{ name: "SignIn" }]
          });
        } catch (error) {
          console.error("Error during sign out:", error);
        }
      },
      refreshToken: async () => {
        const refreshToken = await getRefreshToken();
        if (!refreshToken) {
          throw new Error("No refresh token found.");
        }
      
        const response = await axiosInstance.post("auth/refresh", { refreshToken });
        await setAccessToken(response.data.accessToken);
        await setRefreshToken(response.data.refreshToken);
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
