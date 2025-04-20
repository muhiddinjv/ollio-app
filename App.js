import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/screens/Auth/AuthPro";
import { GlobalProvider } from "./src/hooks";
import { enableScreens } from "react-native-screens";
import DrawerNav from "./src/stacks/DrawerNav";
enableScreens();

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
  return (
    <QueryClientProvider client={queryClient} >
      <GlobalProvider>
        <PaperProvider>
          <NavigationContainer>
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
