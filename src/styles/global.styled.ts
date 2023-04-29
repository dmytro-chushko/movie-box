import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}; 
  ${css`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

    body {
      font-family: DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      background-color: ${({ theme }) => theme.colors.mainBgc};
      color: ${({ theme }) => theme.colors.mainColor};
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  `}
`;
