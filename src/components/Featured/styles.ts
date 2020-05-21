import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { Bold } from 'styles/typography';
import { breakpoints } from 'styles/breakpoints';

export const Title = styled.h2`
  color: ${COLORS.onSecondary};
  font-weight: ${Bold};

  width: calc(100% - 6rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 1.7rem;
  font-size: 1.6rem;
  transition: color 0.25s;

  @media ${breakpoints.mobile} {
    width: calc(100% - 11rem);
  }
`;

export const Count = styled.span`
  color: ${COLORS.onSecondary};

  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 2px;
  right: 0;
  font-size: 1.2rem;

  img {
    margin-left: 0.2rem;
    width: 1.5rem;
  }
`;

export const Description = styled.p`
  color: ${COLORS.onSecondary};

  font-size: 1.4rem;
  line-height: 2.4rem;
`;

export const Container = styled.article`
  position: relative;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;

    &:hover {
      ${Title} {
        color: ${COLORS.onPrimary};
      }
    }
  }
`;

export const Content = styled.span`
  flex: 1;
  margin-left: 1.5rem;
  overflow: hidden;
`;
