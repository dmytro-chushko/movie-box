import { createContext, useContext, useMemo, useState } from "react";
import { TypeSetState } from "../types/set-state.types";
import { useGetPopularMovieList } from "api/query-hooks";
import { Loader } from "components/loader";

interface IAppProvider {
	children: React.ReactNode;
}

interface IAppContext {
	isDark: boolean;
	setIsDark: TypeSetState<boolean>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function useAppContext() {
	return useContext(AppContext);
}

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);

	const { isLoading: isLoadingPopularMovieList } = useGetPopularMovieList();

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

	return (
		<AppContext.Provider value={value}>
			<Loader show={isLoadingPopularMovieList} />
			{children}
		</AppContext.Provider>
	);
};
