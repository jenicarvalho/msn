import React from 'react'
import { Provider } from "react-redux"

import { GlobalStyle, Main } from './App.styles'
import Routes from './routes'
import store from "./store"
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <GlobalStyle />
        <Routes />
      </Main>
    </Provider>
  );
}

export default App;
