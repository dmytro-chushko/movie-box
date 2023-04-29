import styled, { css } from 'styled-components';
import { alignItems, justifyContent } from './consts';

export const MainContainer = styled.div`
  padding-left: ${({ theme }) => theme.size.mainPaddingLeft};
  padding-right: ${({ theme }) => theme.size.mainPaddingRight};
`;

interface IFlexBox {
  ai?: alignItems;
  jc?: justifyContent;
  gap?: string;
}

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  align-items: ${({ ai }) => (ai ? ai : 'stretch')};
  justify-content: ${({ jc }) => (jc ? jc : 'stretch')};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
`;
