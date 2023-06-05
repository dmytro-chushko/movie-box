import styled from "styled-components";

import { FlexBox } from "styles";
import { MEDIA_KEYS } from "styles/consts";
import { imgRoutes } from "utils/img-routes";
import imdbImg from "assets/images/imdb.png";

interface ISliderContainer {
	bgImg: string;
}

export const SlideContainer = styled.div<ISliderContainer>`
	height: 100%;

	background-image: linear-gradient(
			${({ theme }) =>
				`180deg, ${theme.colors.sliderGradientTop}, ${theme.colors.sliderGradientBottom}`}
		),
		url(${({ bgImg }) => imgRoutes.originalImg(bgImg)});
	background-size: cover;
	background-position: center;
`;

export const MovieInfo = styled(FlexBox)`
	height: 100%;
`;

export const MovieDescription = styled.div`
	width: 30%;

	@media (${MEDIA_KEYS.MAX_LAPTOP}) {
		width: 40%;
	}
`;

export const MovieTitle = styled.h2`
	margin-bottom: 0.5em;

	font-size: ${({ theme }) => theme.fontSize.movieTitle};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const MovieParagraph = styled.p`
	margin-bottom: 1em;
`;

export const MovieVoteAverage = styled.span`
	position: relative;

	padding-left: 2.5rem;

	::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;

		display: block;
		width: 35px;
		height: 17px;

		background: url(${imdbImg}) center/cover no-repeat;
	}
`;

export const MovieReleasedDate = styled.span``;

export const MoviePoster = styled.div`
	width: 300px;

	border-radius: ${({ theme }) => theme.size.borderRadius};
	overflow: hidden;

	img {
		object-fit: contain;
	}
`;
