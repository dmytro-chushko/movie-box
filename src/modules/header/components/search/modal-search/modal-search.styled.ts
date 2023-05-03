import styled from "styled-components";

interface ISearchContainer {
	isOpen: boolean;
}

export const SearchContainer = styled.div<ISearchContainer>`
	position: absolute;
	top: 0;

	width: 100vw;
	height: 50vh;

	background-color: ${({ theme }) => theme.colors.primariBgc};
	opacity: 0.8;
	transform: translateY(${({ isOpen }) => (isOpen ? 0 : "-100%")});

	transition: ${({ theme }) => theme.animation.primaryTransition};
`;
