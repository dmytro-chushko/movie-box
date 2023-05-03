import { TypeSetState } from "types/set-state.types";
import * as Styled from "./search-btn.styled";

interface ISearchButton {
	setIsOpen: TypeSetState<boolean>;
}

export const SearchButton = ({ setIsOpen }: ISearchButton) => (
	<Styled.SearchButton type="button" onClick={() => setIsOpen(true)} />
);
