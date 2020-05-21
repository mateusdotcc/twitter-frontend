import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { breakpoints } from 'styles/breakpoints';

export const Container = styled.div`
  background-color: ${COLORS.onBackground};

  padding: 5rem 4.5rem;
  width: 54rem;
  border-radius: 5rem;
  box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.mobile} {
    padding: 4rem 2rem;
    width: calc(100% - 5rem);
    border-radius: 3rem;
  }
`;
