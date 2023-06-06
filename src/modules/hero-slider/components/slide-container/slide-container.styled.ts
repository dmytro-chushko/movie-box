import styled from "styled-components";
import { imgRoutes } from "utils/img-routes";

interface IMainContainer {
	bgImg: string;
}

export const MainContainer = styled.div<IMainContainer>`
	position: relative;

	height: 100%;

	background-image: url(${({ bgImg }) => imgRoutes.originalImg(bgImg)});
	background-size: cover;
	background-position: center;

	transition: ${({ theme }) => theme.animation.primaryTransition};
`;

interface IThemeContainer {
	isDark: boolean;
	topGradient: string;
	bottomGradient: string;
}

export const ThemeContainer = styled.div<IThemeContainer>`
	position: absolute;
	top: 0;
	left: 0;

	height: 100%;
	width: 100%;

	background-image: linear-gradient(
		180deg,
		${({ topGradient }) => topGradient},
		${({ bottomGradient }) => bottomGradient}
	);
	opacity: ${({ isDark }) => (isDark ? 1 : 0)};

	transition: ${({ theme }) => theme.animation.primaryTransition};
`;

export const ChildrenWrapper = styled.div`
	position: relative;
	z-index: 1;

	height: 100%;
`;
