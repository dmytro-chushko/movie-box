import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}; 
  ${css`
    body {
      background-color: ${(props) => props.theme.backgroundColor};
    }
  `}
`;
