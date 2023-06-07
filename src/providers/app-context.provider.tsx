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
	isTrailerOpen: boolean;
	setIsTrailerOpen: TypeSetState<boolean>;
	trailerId: number;
	setTrailerId: TypeSetState<number>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function useAppContext() {
	return useContext(AppContext);
}

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(false);
	const [trailerId, setTrailerId] = useState<number>(0);

	const { isLoading: isLoadingPopularMovieList } = useGetPopularMovieList();

	const value = useMemo(
		() => ({ isDark, setIsDark, isTrailerOpen, setIsTrailerOpen, trailerId, setTrailerId }),
		[isDark, isTrailerOpen, trailerId],
	);

	return (
		<AppContext.Provider value={value}>
			<Loader show={isLoadingPopularMovieList} />
			{children}
		</AppContext.Provider>
	);
};
