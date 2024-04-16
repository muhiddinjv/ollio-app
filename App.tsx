import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from 'react-native-paper';
import Wrapper from "./src/wrapper/wrapper";

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
        <Wrapper />
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
