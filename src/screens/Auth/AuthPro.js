import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { setAccessToken, removeAccessToken, setRefreshToken, setItem } from "../../api/astorage";
import { signIn as apiSignIn, signOut as apiSignOut, refreshToken as apiRefreshToken } from "../../api";
import { jwtDecode } from "jwt-decode";

const AuthContext = React.createContext({
  userToken: null,
  signIn: () => {},
  signOut: () => {},
  refreshToken: () => {},
});

// In case you want to use Auth functions outside React tree
export const AuthRef = React.createRef();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [userToken, setUserToken] = React.useState(null);

  const signInMutation = useMutation(apiSignIn, {
    onSuccess: (data) => {
      queryClient.clear();
      const user = jwtDecode(data.accessToken);
      setItem("user", user);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setUserToken(data.accessToken);
      navigation.navigate("Savdo");
    },
    onError: (error) => {
      Alert.alert("Sign in error:", error?.response?.data || error.message)
      console.error("Error during sign in:", error);
    },
  });

  const signOutMutation = useMutation(apiSignOut, {
    onSuccess: () => {
      queryClient.clear();
      removeAccessToken();
      setUserToken(null);
      setRefreshToken(null);
      setItem("user", null);
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    },
    onError: (error) => {
      console.error("Error during sign out:", error);
    },
  });

  const refreshTokenMutation = useMutation(apiRefreshToken, {
    onSuccess: (data) => {
      queryClient.clear();
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
    },
    onError: (error) => {
      console.error("Error refreshing token:", error);
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    },
  });

  const authActions = React.useMemo(
    () => ({
      signIn: signInMutation.mutate,
      signOut: signOutMutation.mutate,
      refreshToken: refreshTokenMutation.mutate,
    }),
    [navigation]
  );

  return (
    <AuthContext.Provider value={{ userToken, ...authActions }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be inside an AuthProvider with a value");
  }
  return context;
};
