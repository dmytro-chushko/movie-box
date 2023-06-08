import { useState } from "react";

import { SearchField } from "./search-field";
import { SearchButton } from "./search-btn";

import * as GlobalStyles from "styles";
import { ModalWindow } from "components/modal-window";
import { ModalSearch } from "./modal-search";

interface ISearch {
	mediaTrigger: boolean;
}

export const Search = ({ mediaTrigger }: ISearch) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClose = () => setIsOpen(false);

	return mediaTrigger ? (
		<GlobalStyles.ComponentWrapper width="36.45vw">
			<SearchField />
		</GlobalStyles.ComponentWrapper>
	) : (
		<GlobalStyles.ComponentWrapper ml="auto" mr="65px" mt="4.575px" mb="4.575px">
			<SearchButton setIsOpen={setIsOpen} />
			<ModalWindow isOpen={isOpen} onClose={handleClose}>
				<ModalSearch isOpen={isOpen} setIsOpen={setIsOpen} />
			</ModalWindow>
		</GlobalStyles.ComponentWrapper>
	);
};
