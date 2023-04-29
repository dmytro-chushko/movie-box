import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding-top: ${({ theme }) => theme.size.headerPaddingTop};
  padding-bottom: ${({ theme }) => theme.size.headerPaddingBottom};
`;
