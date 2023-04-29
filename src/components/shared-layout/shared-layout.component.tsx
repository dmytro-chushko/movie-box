import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/header';

import * as Styled from './shared-layout.styled';

export const SharedLayout = () => (
  <Styled.Container>
    <Header />
    <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
    </Suspense>
  </Styled.Container>
);
