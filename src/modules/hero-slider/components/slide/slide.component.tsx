import { FC, useEffect } from "react";
import { IMovieItem } from "types/response-types";
import { useTheme } from "styled-components";
import { useSwiper } from "swiper/react";

import { imgRoutes } from "utils/img-routes";
import { IMG_WIDTH, alignItems, justifyContent } from "styles/consts";
import { formatReleasedDate } from "utils/format-release-date";
import { SlideContainer } from "../slide-container";
import { useAppContext } from "providers";

import { FlexBox } from "styles";
import * as Styled from "./slide.styled";
import { useNavigate } from "react-router-dom";

interface ISlideProps {
	slide: IMovieItem;
}

export const Slide: FC<ISlideProps> = ({ slide }) => {
	const { isTrailerOpen, setIsTrailerOpen, setTrailerId } = useAppContext();
	const navigate = useNavigate();
	const theme = useTheme();
	const { autoplay } = useSwiper();

	const handleWatchTrailer = () => {
		setIsTrailerOpen(true);
		setTrailerId(slide.id);
		autoplay.pause();
	};

	const handleShowDetails = () => {
		navigate(`/${slide.id}`);
	};

	useEffect(() => {
		if (!isTrailerOpen) {
			autoplay.start();
		}
	}, [isTrailerOpen, autoplay]);

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
						<Styled.MovieButton onClick={handleWatchTrailer}>watch trailer</Styled.MovieButton>
						<Styled.MovieButton onClick={handleShowDetails}>details</Styled.MovieButton>
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
