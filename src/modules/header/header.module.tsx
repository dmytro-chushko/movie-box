import { useContext } from "react";
import { useMediaQuery } from "@mui/material";
import { AppContext } from "../../providers";
import { Logo } from "./components/logo";
import { Search } from "./components/search";
import { ThemeSwitcher } from "./components/theme-switcher";
import { MEDIA_KEYS, alignItems, justifyContent } from "../../styles/consts";

import * as GlobalStyles from "../../styles";
import * as Styled from "./header.styled";

export const Header = () => {
	const { isDark, setIsDark } = useContext(AppContext);
	const isShowSearch = useMediaQuery(`(${MEDIA_KEYS.SHOW_SEARCH})`);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDark && setIsDark(state => !state);
	};

	return (
		<GlobalStyles.MainContainer>
			<Styled.HeaderContainer ai={alignItems.center} jc={justifyContent.center}>
				<GlobalStyles.AbsoluteWrapper left="0">
					<Logo />
				</GlobalStyles.AbsoluteWrapper>
				<Search mediaTrigger={isShowSearch} />
				<GlobalStyles.AbsoluteWrapper onClick={handleClick} right="0">
					<ThemeSwitcher isChecked={isDark} />
				</GlobalStyles.AbsoluteWrapper>
			</Styled.HeaderContainer>
		</GlobalStyles.MainContainer>
	);
};
