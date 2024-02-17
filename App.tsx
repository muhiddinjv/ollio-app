import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Wrapper from './src/wrapper/wrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App(): JSX.Element {
    return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </QueryClientProvider>
    )
}

export default App;