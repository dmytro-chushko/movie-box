import { Logo } from "./components/logo";
import { Search } from "./components/search";
import { alignItems, justifyContent } from "../../styles/consts";

import * as GlobalStyles from "../../styles";
import * as Styled from "./header.styled";

export const Header = () => (
	<GlobalStyles.MainContainer>
		<Styled.HeaderContainer ai={alignItems.center} jc={justifyContent.spaceBetween}>
			<Logo />
			<Search />
		</Styled.HeaderContainer>
	</GlobalStyles.MainContainer>
);
