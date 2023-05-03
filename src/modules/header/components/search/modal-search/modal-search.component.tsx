import { TypeSetState } from "types/set-state.types";
import * as Styled from "./modal-search.styled";

interface IModalSearchProps {
	isOpen: boolean;
	setIsOpen: TypeSetState<boolean>;
}

export const ModalSearch = ({ isOpen, setIsOpen }: IModalSearchProps) => (
	<Styled.SearchContainer isOpen={isOpen}></Styled.SearchContainer>
);
