import styled from "styled-components";
import lightThemeIcon from "../../../../assets/images/ligthThemeIcon.svg";
import darkThemeIcon from "../../../../assets/images/darkThemeIcon.svg";

export const SwitcherContainer = styled.label`
	position: relative;

	display: block;
	width: ${({ theme }) => theme.size.themeSwithcerWidth};
	height: ${({ theme }) => theme.size.themeSwitcherHeight};
	padding: 1.5px;

	cursor: pointer;
	border: ${({ theme }) => theme.border.primaryBorder};
	border-radius: 100px;

	input {
		display: none;
	}
`;

export const LightThemeIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 50%;
	height: 100%;

	background: url(${lightThemeIcon}) no-repeat center;
`;

export const DarkThemeIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;

	width: 50%;
	height: 100%;

	background: url(${darkThemeIcon}) no-repeat center;
`;

interface ISwitcherLever {
	isChecked: boolean;
}

export const SwitcherLever = styled.div<ISwitcherLever>`
	position: relative;

	width: 50%;
	height: 100%;

	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	transform: ${({ isChecked }) => (isChecked ? "translateX(100%)" : "translateX(0)")};

	transition: all ease-in-out 0.4s;
`;
