import * as React from "react";
import { jwtDecode } from "jwt-decode";
import { getTokens } from "../../api/astorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as apiSignIn, signOut as apiSignOut, refreshToken as apiRefreshToken } from "../../api/requests";

const AuthContext = React.createContext({
  user: null,
  signedIn: false,
  isLoading: false,
  signIn: () => {},
  signOut: () => {},
  refreshToken: () => {},
  setSignedIn: () => {},
});

export function AuthProvider({ children }) {
  const [signedIn, setSignedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const fetchTokens = async () => {
      const tokens = await getTokens();
      if (tokens) {
        const decodedUser = jwtDecode(tokens.access);
        setUser(decodedUser);
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
      setIsLoading(false);
    };

    fetchTokens();
  }, []);

  const signInMutation = useMutation(apiSignIn, {
    onSuccess: () => {
      setUser(user);
      setSignedIn(true);
      queryClient.invalidateQueries(['stock']);
    },
    onError: error => {
      console.error('Error during sign in:', error);
    },
  });

  const signOutMutation = useMutation(apiSignOut, {
    onSuccess: () => {
      queryClient.clear();
      setUser(null);
      setSignedIn(false);
    },
    onError: error => {
      console.error('Error during sign out:', error);
    },
  });

  const refreshTokenMutation = useMutation(apiRefreshToken, {
    onError: error => {
      console.error('Error refreshing token:', error);
      setUser(null);
      setSignedIn(false);
    },
  });

  const authActions = React.useMemo(
    () => ({
      user,
      signedIn,
      isLoading,
      setSignedIn,
      signIn: signInMutation.mutate,
      signOut: signOutMutation.mutate,
      refreshToken: refreshTokenMutation.mutate,
    }),
    [user, signedIn, isLoading]
  );
  React.useEffect(() => {
    console.log('AuthProvider signedIn :>> ', signedIn);
  }, [signedIn]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ ...authActions }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be inside an AuthProvider with a value');
  }
  return context;
};
