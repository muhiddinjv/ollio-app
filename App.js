import React from 'react'
import Wrapper from './src/wrapper/wrapper';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  )
}