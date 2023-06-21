import styled from "styled-components";
import { TrailerAppearanceKeyFrame } from "styles";

export const TrailerContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;

	width: 80vw;
	height: 45vw;

	transform: translate(-50%, -50%);

	animation: trailerAppearance ${({ theme }) => theme.animation.primaryAnimation};
	animation-iteration-count: 1;
	animation-duration: 0.5s;

	${TrailerAppearanceKeyFrame};
`;
