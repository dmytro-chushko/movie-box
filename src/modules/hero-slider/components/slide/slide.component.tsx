import { FC } from "react";
import { IMovieItem } from "types/response-types";

import * as Styled from "./slide.styled";

interface ISlideProps {
	slide: IMovieItem;
}

export const Slide: FC<ISlideProps> = ({ slide }) => {
	return (
		<Styled.SlideContainer bgImg={slide.backdrop_path}>
			<Styled.MovieInfo>Slide</Styled.MovieInfo>
		</Styled.SlideContainer>
	);
};
