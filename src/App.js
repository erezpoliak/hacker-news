import React from "react";
import { createGlobalStyle } from "styled-components";
import Feed from "./Feed";

function App() {
  return (
    <>
      <GlobalStyle />
      <Feed />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   font-size: 10px;
   color: #424242;
 }
`;
