import { css } from "styled-components";

export const ScalingKeyFrame = css`
	@keyframes scaling {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export const SearchScalingKeyFrame = css`
	@keyframes searchScaling {
		0% {
			transform: translateY(-50%) scale(1);
		}
		50% {
			transform: translateY(-50%) scale(1.5);
		}
		100% {
			transform: translateY(-50%) scale(1);
		}
	}
`;

export const TrailerAppearanceKeyFrame = css`
	@keyframes trailerAppearance {
		0% {
			transform: translate(-50%, -50%);
			opacity: 0;
		}
		1% {
			transform: translate(50%, -50%);
			opacity: 0;
		}
		100% {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}
`;
