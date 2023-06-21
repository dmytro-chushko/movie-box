import { useGetPopularMovieList } from "api/query-hooks";
import { HeroSlider } from "modules/hero-slider";

export const Home = () => {
	const { data } = useGetPopularMovieList();
	console.log(data?.results);

	return (
		<>
			{data && <HeroSlider slides={data.results} />}
			<div>...Loading</div>
		</>
	);
};
