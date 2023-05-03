import styled from "styled-components";
import searchButtonIcon from "../../../../../assets/images/searchButtonIcon.svg";
import { ScalingKeyFrame } from "../../../../../styles";

export const SearchButton = styled.button`
	display: block;
	width: 30px;
	height: 30px;

	/* outline: 1px solid yellow; */

	background: transparent url(${searchButtonIcon}) center no-repeat;
	background-size: contain;

	:hover {
		animation: scaling ${({ theme }) => theme.animation.primaryAnimation};
	}

	${ScalingKeyFrame};
`;
