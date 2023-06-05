import styled, { css } from "styled-components";
import { alignItems, justifyContent } from "./consts";

export const MainContainer = styled.div`
	padding-left: ${({ theme }) => theme.size.mainPaddingLeft};
	padding-right: ${({ theme }) => theme.size.mainPaddingRight};
`;

interface IFlexBox {
	ai?: alignItems;
	jc?: justifyContent;
	gap?: string;
	mb?: string;
}

export const FlexBox = styled.div<IFlexBox>`
	display: flex;
	align-items: ${({ ai }) => (ai ? ai : "stretch")};
	justify-content: ${({ jc }) => (jc ? jc : "stretch")};
	${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`};

	${({ mb }) =>
		mb &&
		css`
			margin-bottom: ${mb};
		`}
`;

interface IComponentWrapper {
	width?: string;
	mt?: string;
	mb?: string;
	ml?: string;
	mr?: string;
}

export const ComponentWrapper = styled.div<IComponentWrapper>`
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};
	${({ mt }) =>
		mt &&
		css`
			margin-top: ${mt};
		`};
	${({ mb }) =>
		mb &&
		css`
			margin-bottom: ${mb};
		`};
	${({ ml }) =>
		ml &&
		css`
			margin-left: ${ml};
		`};
	${({ mr }) =>
		mr &&
		css`
			margin-right: ${mr};
		`};
`;

interface IAbsoluteWrapper {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	zi?: string;
}

export const AbsoluteWrapper = styled.div<IAbsoluteWrapper>`
	position: absolute;
	${({ top }) =>
		top &&
		css`
			top: ${top};
		`};
	${({ bottom }) =>
		bottom &&
		css`
			bottom: ${bottom};
		`};
	${({ left }) =>
		left &&
		css`
			left: ${left};
		`};
	${({ right }) =>
		right &&
		css`
			right: ${right};
		`};
`;
