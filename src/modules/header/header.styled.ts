import styled from "styled-components";
import { ComponentWrapper, FlexBox } from "../../styles";

export const HeaderContainer = styled(FlexBox)`
	position: relative;

	padding-top: ${({ theme }) => theme.size.headerPaddingTop};
	padding-bottom: ${({ theme }) => theme.size.headerPaddingBottom};
`;

export const SearchWrapper = styled(ComponentWrapper)`
	order: 3;
`;
