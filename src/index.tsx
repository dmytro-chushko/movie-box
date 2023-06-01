import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/global.styled";
import { AppContextProvider, AppThemeProvider } from "./providers";
import { QueryClientProvider } from "react-query";
import { queryClient } from "api/query-client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<AppContextProvider>
			<AppThemeProvider>
				<GlobalStyle />
				<App />
			</AppThemeProvider>
		</AppContextProvider>
	</QueryClientProvider>,
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
