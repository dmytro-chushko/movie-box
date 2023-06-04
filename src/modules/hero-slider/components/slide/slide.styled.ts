import styled from "styled-components";
import { imgRoutes } from "utils/img-routes";

interface ISliderContainer {
	bgImg: string;
}

export const SlideContainer = styled.div<ISliderContainer>`
	height: 100%;

	background-image: url(${({ bgImg }) => imgRoutes.originalImg(bgImg)});
	background-size: cover;
	background-position: center;
`;
