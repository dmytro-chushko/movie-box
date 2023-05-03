import styled from "styled-components";
import { Link } from "react-router-dom";
import { ScalingKeyFrame } from "../../../../styles";

export const LogoWrapper = styled.div`
	height: ${({ theme }) => theme.size.logoSize};
	width: ${({ theme }) => theme.size.logoSize};
	transition: ${({ theme }) => theme.animation.primaryTransition};
`;

export const LogoText = styled.span`
	font-size: ${({ theme }) => theme.fontSize.logo};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.primaryColor};
`;

export const LogoLink = styled(Link)`
	display: block;
	width: ${({ theme }) => theme.size.logoWidth};

	:hover ${LogoWrapper}, :focus ${LogoWrapper} {
		animation: scaling ${({ theme }) => theme.animation.primaryAnimation};
	}

	${ScalingKeyFrame};
`;
