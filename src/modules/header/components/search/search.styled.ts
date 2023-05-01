import styled from "styled-components";
import searchButtonIcon from "../../../../assets/images/searchButtonIcon.svg";

export const SearhForm = styled.form`
	position: relative;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: ${({ theme }) => theme.size.inputPadding};
	font-size: ${({ theme }) => theme.fontSize.medium};
	line-height: 1.5;
	color: ${({ theme }) => theme.colors.primaryColor};
	border: ${({ theme }) => theme.border.primaryBorder};
	border-radius: ${({ theme }) => theme.size.borderRadius};
	background-color: transparent;
`;

export const SearchButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${({ theme }) => theme.size.searchButtonWidth};
	background: transparent url(${searchButtonIcon}) center no-repeat;
`;
