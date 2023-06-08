import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";

import * as Styled from "./modal-window.styled";

interface IModalWindow {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const modalRootElement = document.querySelector("#modal");

export const ModalWindow = ({ children, isOpen, onClose }: IModalWindow) => {
	const element = useMemo(() => document.createElement("div"), []);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLDivElement).dataset.backdrop) onClose();
	};

	useEffect(() => {
		modalRootElement?.appendChild(element);

		return () => {
			modalRootElement?.removeChild(element);
		};
	}, [element]);

	return createPortal(
		<Styled.Backdrop isOpen={isOpen} onClick={handleClick} data-backdrop={true}>
			{children}
		</Styled.Backdrop>,
		element,
	);
};
