import React from 'react'
import Routers from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from 'theme/GlobalStyle'

const App = ({ token }) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers token={token} />
    </BrowserRouter>
  )
}

export default App
