import { useContext } from "react";
import { AppContext } from "../../providers";
import { Logo } from "./components/logo";
import { Search } from "./components/search";
import { ThemeSwitcher } from "./components/theme-switcher";
import { alignItems, justifyContent } from "../../styles/consts";

import * as GlobalStyles from "../../styles";
import * as Styled from "./header.styled";

export const Header = () => {
	const { isDark, setIsDark } = useContext(AppContext);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDark && setIsDark(state => !state);
	};

	return (
		<GlobalStyles.MainContainer>
			<Styled.HeaderContainer ai={alignItems.center} jc={justifyContent.spaceBetween}>
				<Logo />
				<Search />
				<Styled.ComponentWrapper onClick={handleClick}>
					<ThemeSwitcher isChecked={isDark} />
				</Styled.ComponentWrapper>
			</Styled.HeaderContainer>
		</GlobalStyles.MainContainer>
	);
};
