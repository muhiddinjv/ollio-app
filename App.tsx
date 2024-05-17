import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { InitApp } from "./src/wrapper/Init";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <PaperProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient} >
            <InitApp />
          </QueryClientProvider>
        </NavigationContainer>
      </PaperProvider>
  );
}

export default App;
