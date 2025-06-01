import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalProvider } from './src/hooks';
import { AuthProvider } from './src/screens/Auth/AuthPro';
import AppStack from './src/stacks/AppStack';

enableScreens();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log('error', error);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <PaperProvider>
            <AuthProvider>
              <GlobalProvider>
                <AppStack />
              </GlobalProvider>
            </AuthProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
