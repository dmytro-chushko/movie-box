import { createContext, useContext, useMemo, useState } from "react";
import { TypeSetState } from "../types/set-state.types";
import { useGetPopularMovieList } from "api/query-hooks";

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

	const { isLoading: isLoadingPopularMovieList } = useGetPopularMovieList(1);

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
