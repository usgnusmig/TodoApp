import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
  html,body {
    padding: 0;
    margin: 0;
  }
  
  body {
    height: 100%;
    width: 100%;
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
};

export default App;
