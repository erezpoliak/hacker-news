import React from "react";
import { createGlobalStyle } from "styled-components";
import Feed from "./Feed";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./Post";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/" component={Feed} />
      <Route path="/post" component={Post} />
    </Router>
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
