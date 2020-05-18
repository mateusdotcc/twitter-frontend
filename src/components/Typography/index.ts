import styled from 'styled-components';

import { Medium, Bold } from 'styles/typography';

export const H1 = styled.h1`
  font-weight: ${Bold};

  margin-bottom: 3.4rem;
  font-size: 3.5rem;
  text-align: left;
  line-height: 4.5rem;
  letter-spacing: -1pt;
`;

export const H2 = styled.h2`
  font-weight: ${Medium};

  font-size: 2.6rem;
  line-height: 3.2rem;
  letter-spacing: -0.5pt;
`;
