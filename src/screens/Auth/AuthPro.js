import * as React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { refresh, signIn, signOut } from '../../api/requests';
import { authService } from './AuthService';

const AuthContext = React.createContext({
  user: null,
  signedIn: false,
  isLoading: false,
  signIn: () => {},
  signOut: () => {},
  refresh: () => {},
});

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [signedIn, setSignedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);
  
  const queryClient = useQueryClient();

  React.useEffect(() => {
    // removeTokens();
    authService.setSignOutHandler(async () => {
      console.log('singout mutation');
      signOutMutation.mutate();
    });
  }, []);

  const signInMutation = useMutation(signIn, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('users');
      setUser(data);
      setSignedIn(true);
    },
    onError: error => {
      console.error('Error during sign in:', error);
    },
  });

  const signOutMutation = useMutation(signOut, {
    onSuccess: () => {
      console.log('signout mutation success');
      queryClient.clear();
      setUser(null);
      setSignedIn(false);
    },
    onError: error => {
      console.error('Error during sign out:', error);
    },
  });

  const refreshMutation = useMutation(refresh, {
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
      refresh: refreshMutation.mutate,
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
