import { FC } from "react";
import { IMovieItem } from "types/response-types";
import { useTheme } from "styled-components";

import { imgRoutes } from "utils/img-routes";
import { IMG_WIDTH, alignItems, justifyContent } from "styles/consts";
import { formatReleasedDate } from "utils/format-release-date";

import * as GlobalStyles from "styles";
import * as Styled from "./slide.styled";

interface ISlideProps {
	slide: IMovieItem;
}

export const Slide: FC<ISlideProps> = ({ slide }) => {
	const theme = useTheme();

	return (
		<Styled.SlideContainer bgImg={slide.backdrop_path}>
			<Styled.MovieInfo ai={alignItems.center} jc={justifyContent.center} gap={theme.size.slideGap}>
				<Styled.MovieDescription>
					<Styled.MovieTitle>{slide.original_title}</Styled.MovieTitle>
					<GlobalStyles.FlexBox ai={alignItems.center} gap="2rem" mb="1em">
						<Styled.MovieVoteAverage>: {slide.vote_average} / 10</Styled.MovieVoteAverage>
						<span>{formatReleasedDate(slide.release_date)}</span>
					</GlobalStyles.FlexBox>

					<Styled.MovieParagraph>{slide.overview}</Styled.MovieParagraph>
				</Styled.MovieDescription>
				<Styled.MoviePoster>
					<img
						src={imgRoutes.customImage(slide.poster_path, IMG_WIDTH.SLIDE_POSTER)}
						alt={slide.original_title}
					/>
				</Styled.MoviePoster>
			</Styled.MovieInfo>
		</Styled.SlideContainer>
	);
};
