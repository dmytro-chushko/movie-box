import styled from "styled-components";
import { FlexBox } from "../../styles";

export const HeaderContainer = styled(FlexBox)`
	padding-top: ${({ theme }) => theme.size.headerPaddingTop};
	padding-bottom: ${({ theme }) => theme.size.headerPaddingBottom};
`;

export const ComponentWrapper = styled.div``;
