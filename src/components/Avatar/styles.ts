import styled from 'styled-components';

import { COLORS } from 'styles/colors';

export const Container = styled.button.attrs({ type: 'button' })`
  background-color: ${COLORS.onBackground};

  min-width: 45px;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: auto;
  }
`;
