import { useQuery } from "react-query";
import { tmdbAPi } from "./tmdb-api";
import { IMovieItem, IResponseWithList, ITrailerList } from "types/response-types";
import { CONTENT_OPTIONS, CONTENT_TYPE } from "types/query-types";

export const useGetPopularMovieList = (page: number = 1) =>
	useQuery<IResponseWithList<IMovieItem>>(["popularMovieList"], () =>
		tmdbAPi.getContentList<IMovieItem>(CONTENT_TYPE.MOVIES, CONTENT_OPTIONS.POPULAR, {
			page: `${page.toString()}`,
		}),
	);

export const useGetMovieTrailerById = (id: number) =>
	useQuery<ITrailerList>(["heroTrailerById", id], () =>
		tmdbAPi.getContentItemById<ITrailerList>(CONTENT_TYPE.MOVIES, id, CONTENT_OPTIONS.VIDEOS),
	);
