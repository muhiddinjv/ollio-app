import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { PaperProvider } from 'react-native-paper';

import Wrapper from "./src/wrapper/wrapper";
import { store } from "./src/redux/store";


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
      <ReduxProvider store={store}>
        <PaperProvider>
          <Wrapper />
        </PaperProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;
