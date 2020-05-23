import styled from 'styled-components';
import { rgba } from 'polished';

import { COLORS } from 'styles/colors';

export const Container = styled.div`
  background-color: ${rgba(COLORS.onPrimary, 0.8)};

  opacity: 0;
  visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s, visibility 0.6s;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const Card = styled.div`
  color: ${COLORS.onSecondary};
  background-color: ${COLORS.onBackground};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  height: 25rem;
  border-radius: 3rem;
  text-align: center;

  h2 {
    margin-top: 5rem;
  }

  button {
    width: 18rem;
  }
`;
