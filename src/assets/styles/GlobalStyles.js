import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
  ${normalize}

 *, *::after, *::before{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
  font-size: 62.5%;
}

body{
  margin:0;
  padding:0;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

img{
  display: block;
  width: 100%;
}
`;

export default GlobalStyled;
