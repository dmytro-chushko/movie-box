import styled from "styled-components";
import { FlexBox } from "../../styles";

export const HeaderSection = styled.header`
	position: fixed;
	z-index: 2;

	width: 100%;

	background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const HeaderContainer = styled(FlexBox)`
	position: relative;

	padding-top: ${({ theme }) => theme.size.headerPaddingTop};
	padding-bottom: ${({ theme }) => theme.size.headerPaddingBottom};
`;
