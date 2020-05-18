import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { COLORS } from 'styles/colors';
import { Medium } from 'styles/typography';

interface Props {
  variant?: 'primary' | 'secondary';
  suffix?: boolean | string;
}

export const Container = styled.button<Props>`
  font-weight: ${Medium};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  width: auto;
  min-height: 55px;
  height: 5.5rem;
  font-size: 2.2rem;
  border-radius: 2rem;
  transition: color 0.25s, background-color 0.25s;

  img {
    transition: filter 0.25s;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
    cursor: auto;
  }

  &:hover {
    background-color: ${shade(0.1, COLORS.onPrimary)};

    img {
      filter: invert(1);
    }
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: ${COLORS.onBackground};
      background-color: ${COLORS.primary};
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${COLORS.secondary};
      background-color: ${COLORS.tertiary};

      &:hover {
        color: ${COLORS.onBackground};
      }
    `}

  ${({ suffix }) =>
    suffix &&
    css`
      img {
        margin-left: 2rem;
      }
    `}
`;
