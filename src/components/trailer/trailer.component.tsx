import { RotatingLines } from "react-loader-spinner";

import { useGetMovieTrailerById } from "api/query-hooks";
import { useAppContext } from "providers";
import { getTrailer } from "utils/get-trailer";

import { AbsoluteWrapper } from "styles";

export const Trailer = () => {
	const { trailerId } = useAppContext();
	const { data, isLoading } = useGetMovieTrailerById(trailerId);

	console.log(data);

	return data && !isLoading ? (
		<iframe
			src={`https://www.youtube.com/embed/${getTrailer(data.results)}`}
			width="100%"
			height="100%"
			title="Trailer"
		></iframe>
	) : (
		<AbsoluteWrapper center>
			<RotatingLines
				strokeColor="#8A8A8E"
				strokeWidth="5"
				animationDuration="0.75"
				width="200"
				visible={true}
			/>
		</AbsoluteWrapper>
	);
};
