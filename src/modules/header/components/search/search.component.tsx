import { useState, ChangeEvent, FormEvent } from "react";

import * as Styled from "./search.styled";

export const Search = () => {
	const [keyword, setKeyword] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<Styled.SearhForm onSubmit={handleSubmit}>
			<Styled.SearchInput type="text" value={keyword} onChange={handleChange} />
			<Styled.SearchButton type="submit" />
		</Styled.SearhForm>
	);
};
