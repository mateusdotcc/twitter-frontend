import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const Centralized = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media ${breakpoints.mobile} {
    height: auto;
  }
`;
