import { FC, ReactNode } from "react";

import { useTheme } from "styled-components";
import { useAppContext } from "providers";

import * as Styled from "./slide-container.styled";

interface ISliderContainer {
	children: ReactNode;
	bgImg: string;
}

export const SlideContainer: FC<ISliderContainer> = ({ children, bgImg }) => {
	const theme = useTheme();
	const { isDark } = useAppContext();

	return (
		<Styled.MainContainer bgImg={bgImg}>
			<Styled.ThemeContainer
				isDark={isDark}
				topGradient={theme.colors.darkSliderGradientTop}
				bottomGradient={theme.colors.darkSliderGradientBottom}
			/>
			<Styled.ThemeContainer
				isDark={!isDark}
				topGradient={theme.colors.lightSliderGradientTop}
				bottomGradient={theme.colors.lightSliderGradientBottom}
			/>
			<Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
		</Styled.MainContainer>
	);
};
