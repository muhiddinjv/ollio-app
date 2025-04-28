import * as React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';

import { getAccessToken } from '../../api/astorage';
import { refreshToken as apiRefreshToken, signIn as apiSignIn, signOut as apiSignOut } from '../../api/requests';

const AuthContext = React.createContext({
  user: null,
  signedIn: false,
  isLoading: false,
  signIn: () => {},
  signOut: () => {},
  refreshToken: () => {},
});

export function AuthProvider({ children }) {
  const [signedIn, setSignedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const queryClient = useQueryClient();

  const checkAuthStatus = async () => {
    try {
      const token = await getAccessToken();
      if (token) {
        const decodedUser = jwtDecode(token);
        console.log('decodedUser :>> ', decodedUser);
        setUser(decodedUser);
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    } catch (error) {
      console.error('Error during authentication check:', error);
      setSignedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    checkAuthStatus();
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
