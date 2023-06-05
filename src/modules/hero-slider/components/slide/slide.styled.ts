import styled from "styled-components";
import { imgRoutes } from "utils/img-routes";

interface ISliderContainer {
	bgImg: string;
}

export const SlideContainer = styled.div<ISliderContainer>`
	height: 100%;

	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${({ bgImg }) => imgRoutes.originalImg(bgImg)});
	background-size: cover;
	background-position: center;
`;

export const MovieInfo = styled.div`
	padding: 9rem 0;
`;

export const MovieDescription = styled.div``;
