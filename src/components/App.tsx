import * as React from 'react';
import Home from './Home';
import { createGlobalStyle } from 'styled-components';
import { AmaticSC, JosefinSlab } from '../fonts';

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    font-family: Josefin Slab, sans-serif;
    font-size: 1.2rem;
    line-height: 1.1;
  }

@font-face {
    font-family: AmaticSC;
    src: url(${AmaticSC});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  
  @font-face {
    font-family: Josefin Slab;
    src: url(${JosefinSlab});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }`;

const App = () => (
	<>
		<GlobalStyle />
		<Home />
	</>
);

export default App;
