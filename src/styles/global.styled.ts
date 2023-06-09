import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}; 
  ${css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			font-family: DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
				"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
			font-size: ${({ theme }) => theme.fontSize.base};

			color: ${({ theme }) => theme.colors.primaryChangingColor};
			background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
		}

		img {
			display: block;
			width: 100%;
			height: auto;
		}

		a {
			text-decoration: none;
			color: ${({ theme }) => theme.colors.primaryChangingColor};

			transition: ${({ theme }) => theme.animation.primaryTransition};
		}

		button {
			color: ${({ theme }) => theme.colors.primaryChangingColor};
			cursor: pointer;
			background: transparent;
			border: none;

			transition: ${({ theme }) => theme.animation.primaryTransition};
		}

		ul,
		ol {
			list-style: none;
		}

		input {
			outline: none;
		}

		img {
			display: block;
			height: auto;
			max-width: 100%;
		}
	`}
`;
