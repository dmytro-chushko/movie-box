import { tmdbAPi } from "api/tmdb-api";
import { useEffect } from "react";
import { CONTENT_OPTIONS, CONTENT_TYPE } from "types/query-types";
import { IMovieItem } from "types/response-types";

export const Home = () => {
	// useEffect(() => {
	// 	const getMoviesList = async () => {
	// 		const params = { page: "1" };
	// 		const result = await tmdbAPi.getContentList<IMovieItem>(
	// 			CONTENT_TYPE.MOVIES,
	// 			CONTENT_OPTIONS.POPULAR,
	// 			params,
	// 		);

	// 		console.log(result.results);
	// 	};

	// 	getMoviesList();
	// }, []);

	return <div>Home</div>;
};
