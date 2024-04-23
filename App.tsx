import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from 'react-native-paper';
import { InitApp } from "./src/wrapper/Init";
import { NavigationContainer } from "@react-navigation/native";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <InitApp />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
