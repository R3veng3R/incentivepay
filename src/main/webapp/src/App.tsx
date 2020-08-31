import React from 'react';
import {HomePage} from "./pages/home";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .error {
      border: 2px solid #FF6565 !important;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <HomePage/>
        </>
    );
}

export default App;
