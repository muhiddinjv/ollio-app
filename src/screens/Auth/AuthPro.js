import * as React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAccessToken, removeAccessToken, setRefreshToken, setItem, getAccessToken } from "../../api/astorage";
import { signIn as apiSignIn, signOut as apiSignOut, refreshToken as apiRefreshToken } from "../../api/requests";
import { useGlobalState } from "../../hooks";

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
  const { setUser } = useGlobalState();

  const signInMutation = useMutation(apiSignIn, {
    onSuccess: (data) => {
      const user = jwtDecode(data.accessToken);
      setItem("user", user);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setUser(user);
      navigation.navigate("Savdo");

      // Invalidate queries related to stock items
      queryClient.invalidateQueries(["stock"]);
    },
    onError: (error) => {
      Alert.alert("Sign in error:", error?.response?.data || error.message);
      console.error("Error during sign in:", error);
    },
  });

  const signOutMutation = useMutation(apiSignOut, {
    onSuccess: () => {
      queryClient.clear();
      removeAccessToken();
      setUser(null);
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
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
    },
    onError: (error) => {
      console.error("Error refreshing token:", error);
      removeAccessToken();
      setUser(null);
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

  React.useEffect(() => {
    AuthRef.current = authActions;
  }, [authActions]);
  

  return (
    <AuthContext.Provider value={{ ...authActions }}>
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
