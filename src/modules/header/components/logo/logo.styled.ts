import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled.div`
	height: ${({ theme }) => theme.size.logoSize};
	width: ${({ theme }) => theme.size.logoSize};
	transition: all ease-in-out 0.4s;
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
		animation: scaling 1s linear infinite;
	}

	@keyframes scaling {
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;
