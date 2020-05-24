import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { Bold } from 'styles/typography';
import { breakpoints } from 'styles/breakpoints';

export const Container = styled.article`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-left: 2.5rem;

  @media ${breakpoints.mobile} {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
  }
`;

export const Username = styled.strong`
  font-weight: ${Bold};

  margin-bottom: 1.7rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  line-height: 1.9rem;

  span {
    color: ${COLORS.onSecondary};

    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: normal;
  }

  @media ${breakpoints.mobile} {
    span {
      display: none;
    }
  }
`;

export const Message = styled.p`
  color: ${COLORS.onSecondary};

  line-height: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  margin-top: 2.8rem;

  li {
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;

    &:first-child {
      position: absolute;
      left: 0;
    }

    &:not(:last-child) {
      margin: 0 3.6rem 0 0;
    }

    &:last-child {
      span {
        color: ${COLORS.primary};
      }
    }
  }

  img {
    margin-right: 0.9rem;
    max-height: 14px;
  }
`;
