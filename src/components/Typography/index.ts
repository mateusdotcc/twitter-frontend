import styled from 'styled-components';

import { Medium, Bold } from 'styles/typography';
import { breakpoints } from 'styles/breakpoints';

export const H1 = styled.h1`
  font-weight: ${Bold};

  margin-bottom: 3.4rem;
  font-size: 3.5rem;
  text-align: left;
  line-height: 4.5rem;
  letter-spacing: -1pt;

  @media ${breakpoints.mobile} {
    font-size: 2.8rem;
    line-height: 3.5rem;
  }
`;

export const H2 = styled.h2`
  font-weight: ${Medium};

  font-size: 2.6rem;
  line-height: 3.2rem;
  letter-spacing: -0.5pt;

  @media ${breakpoints.mobile} {
    font-size: 2.2rem;
    line-height: 3.5rem;
  }
`;
