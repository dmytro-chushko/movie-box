import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/global.styled";
import { AppContextProvider, AppThemeProvider } from "./providers";
import { queryClient } from "api/query-client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<AppContextProvider>
			<AppThemeProvider>
				<GlobalStyle />
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</AppThemeProvider>
		</AppContextProvider>
	</QueryClientProvider>,
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
