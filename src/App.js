import React, { Fragment } from 'react'
import Routes from './routes'
import Helmet from 'react-helmet'
import { GlobalStyle } from './GlobalStyles'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Helmet title="Port Stephens Cleaning" />
      <Routes/>
    </Fragment>
  );
}

export default App;
