import { Logo } from './components/logo';

import * as GlobalStyles from '../../styles';
import * as Styled from './header.styled';

export const Header = () => (
  <GlobalStyles.MainContainer>
    <Styled.HeaderContainer>
      <Logo />
    </Styled.HeaderContainer>
  </GlobalStyles.MainContainer>
);
