import styled from "styled-components";

import { FlexBox } from "styles";
import { MEDIA_KEYS } from "styles/consts";
import imdbImg from "assets/images/imdb.png";

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

	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.medium};

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

export const MovieReleasedDate = styled.span`
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const MovieButton = styled.button`
	width: 40%;
	padding: 0.5em 1em;

	font-weight: ${({ theme }) => theme.fontWeight.medium};
	text-transform: uppercase;

	border: ${({ theme }) => theme.border.slideButtonBorder};
	border-radius: ${({ theme }) => theme.size.borderRadius};

	transition: ${({ theme }) => theme.animation.primaryTransition};

	:hover {
		color: ${({ theme }) => theme.colors.primaryChangingBgc};
		background-color: ${({ theme }) => theme.colors.primaryChangingColor};
	}
`;

export const MoviePoster = styled.div`
	width: 300px;

	border-radius: ${({ theme }) => theme.size.borderRadius};
	overflow: hidden;

	img {
		object-fit: contain;
	}
`;
