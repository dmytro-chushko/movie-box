import { ModalWindow } from "components/modal-window";
import { useAppContext } from "providers";

import { TrailerContainer } from "./modal-trailer.styled";
import { Trailer } from "components/trailer";

export const ModalTrailer = () => {
	const { trailerId, setTrailerId, isTrailerOpen, setIsTrailerOpen } = useAppContext();

	const handleClose = () => {
		setIsTrailerOpen(false);
		setTrailerId(0);
	};

	return (
		<ModalWindow isOpen={isTrailerOpen} onClose={handleClose}>
			{trailerId && (
				<TrailerContainer>
					<Trailer />
				</TrailerContainer>
			)}
		</ModalWindow>
	);
};
