import { useTheme } from 'styled-components';
import LogoTv from '../../../../assets/images/logo.svg';
import { alignItems, justifyContent } from '../../../../styles/consts';

import * as GlobalStyles from '../../../../styles';
import * as Styled from './logo.styled';

export const Logo = () => {
  const theme = useTheme();

  return (
    <Styled.LogoLink to='/'>
      <GlobalStyles.FlexBox
        ai={alignItems.center}
        jc={justifyContent.spaceBetween}
        gap={theme.size.logoGap}
      >
        <Styled.LogoWrapper>
          <img src={LogoTv} alt='Movie box logo' />
        </Styled.LogoWrapper>
        <Styled.LogoText>MovieBox</Styled.LogoText>
      </GlobalStyles.FlexBox>
    </Styled.LogoLink>
  );
};
