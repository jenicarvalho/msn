import React from 'react'
import { Provider } from "react-redux"

import { GlobalStyle } from './App.styles'
import Routes from './routes'
import store from "./store"

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle />
        <Routes />
    </Provider>
  );
}

export default App;
