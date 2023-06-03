import { useQuery } from "react-query";
import { tmdbAPi } from "./tmdb-api";
import { IMovieItem, IResponseWithList } from "types/response-types";
import { CONTENT_OPTIONS, CONTENT_TYPE } from "types/query-types";

export const useGetPopularMovieList = (page: number) =>
	useQuery<IResponseWithList<IMovieItem>>(["popularMovieList"], () =>
		tmdbAPi.getContentList<IMovieItem>(CONTENT_TYPE.MOVIES, CONTENT_OPTIONS.POPULAR, {
			page: `${page.toString()}`,
		}),
	);
