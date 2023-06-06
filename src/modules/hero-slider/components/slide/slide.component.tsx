import { FC } from "react";
import { IMovieItem } from "types/response-types";
import { useTheme } from "styled-components";

import { imgRoutes } from "utils/img-routes";
import { IMG_WIDTH, alignItems, justifyContent } from "styles/consts";
import { formatReleasedDate } from "utils/format-release-date";
import { SlideContainer } from "../slide-container";

import { FlexBox } from "styles";
import * as Styled from "./slide.styled";

interface ISlideProps {
	slide: IMovieItem;
}

export const Slide: FC<ISlideProps> = ({ slide }) => {
	const theme = useTheme();

	return (
		<SlideContainer bgImg={slide.backdrop_path}>
			<Styled.MovieInfo ai={alignItems.center} jc={justifyContent.center} gap={theme.size.slideGap}>
				<Styled.MovieDescription>
					<Styled.MovieTitle>{slide.original_title}</Styled.MovieTitle>
					<FlexBox ai={alignItems.center} gap="2rem" mb="1em">
						<Styled.MovieVoteAverage>: {slide.vote_average} / 10</Styled.MovieVoteAverage>
						<Styled.MovieReleasedDate>
							{formatReleasedDate(slide.release_date)}
						</Styled.MovieReleasedDate>
					</FlexBox>
					<Styled.MovieParagraph>{slide.overview}</Styled.MovieParagraph>
					<FlexBox ai={alignItems.center} gap="2rem">
						<Styled.MovieButton>watch trailer</Styled.MovieButton>
						<Styled.MovieButton>details</Styled.MovieButton>
					</FlexBox>
				</Styled.MovieDescription>
				<Styled.MoviePoster>
					<img
						src={imgRoutes.customImage(slide.poster_path, IMG_WIDTH.SLIDE_POSTER)}
						alt={slide.original_title}
					/>
				</Styled.MoviePoster>
			</Styled.MovieInfo>
		</SlideContainer>
	);
};
