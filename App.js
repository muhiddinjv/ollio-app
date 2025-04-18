import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { Linking, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthProvider } from "./src/screens/Auth/AuthProvider";
import { GlobalProvider } from "./src/hooks";
import { enableScreens } from "react-native-screens";
import DrawerNav from "./src/stacks/DrawerNav";
enableScreens();

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
   // Don't persist state/screen on web since it's based on URL
  const [ isReady, setIsReady ] = useState(Platform.OS === 'web');
  const [ initialState, setInitialState ] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl == null) {
          // Only restore state/screen if there's no deep link
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady])

  if (!isReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient} >
      <GlobalProvider>
        <PaperProvider>
          <NavigationContainer
            initialState={initialState}
            onStateChange={(state) =>
              AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}>
              <AuthProvider>
                <DrawerNav />
              </AuthProvider>
          </NavigationContainer>
        </PaperProvider>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;
