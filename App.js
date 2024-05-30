import React from "react";
import "react-native-gesture-handler";
import { Linking, Platform } from 'react-native';
import { PaperProvider, MD3DarkTheme, MD3LightTheme, MD2DarkTheme, MD2LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStack from "./src/stacks/AppStack";
import { GlobalState } from "./src/context";
import { AuthProvider } from "./src/screens/Auth";

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
// const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
   // Don't persist state/screen on web since it's based on URL
  const [isReady, setIsReady] = React.useState(Platform.OS === 'web');
  const [initialState, setInitialState] = React.useState();
  
  // const colorScheme = useColorScheme();
  // const paperTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  React.useEffect(() => {
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
    <GlobalState>
      <PaperProvider>
        <NavigationContainer
          initialState={initialState}
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}>
          <QueryClientProvider client={queryClient} >
            <AuthProvider>
              <AppStack />
            </AuthProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </PaperProvider>
    </GlobalState>
  );
}

export default App;
