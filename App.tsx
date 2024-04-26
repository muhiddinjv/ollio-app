import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { InitApp } from "./src/wrapper/Init";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
// import { GlobalState } from "./src/contexts/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  // const useQryClient = useQueryClient();

  // Initialize catalogIds in the global state
  // useQryClient.setQueryData(['catalogIds'], []);

  return (
    <PaperProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient} >
          {/* <GlobalState> */}
            <InitApp />
          {/* </GlobalState> */}
          </QueryClientProvider>
        </NavigationContainer>
      </PaperProvider>
  );
}

export default App;
