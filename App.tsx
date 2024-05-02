import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { InitApp } from "./src/wrapper/Init";
import { NavigationContainer } from "@react-navigation/native";
import { MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { handleErrorMessage } from "./src/utils/handleErrors";

const queryClient = new QueryClient();

function App(): JSX.Element {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (mutation.options.onError) return;

            const errorMessage = handleErrorMessage(error);
            // toast.error(errorMessage);
          },
        }),
      })
  );

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
