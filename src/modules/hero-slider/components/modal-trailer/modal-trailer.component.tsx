import { FC } from "react";

import { ModalWindow } from "components/modal-window";
import { TypeSetState } from "types/set-state.types";
import { useAppContext } from "providers";

import { TrailerContainer } from "./modal-trailer.styled";

interface IModalTrailer {
	isOpen: boolean;
	setIsOpen: TypeSetState<boolean>;
}

export const ModalTrailer: FC<IModalTrailer> = ({ isOpen, setIsOpen }) => {
	const { trailerId } = useAppContext();

	return (
		<ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
			<TrailerContainer>ModalTrailer: {trailerId}</TrailerContainer>
		</ModalWindow>
	);
};
