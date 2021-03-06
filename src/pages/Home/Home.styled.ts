import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { breakpoints } from 'styles/breakpoints';

export const Container = styled.main`
  background-color: ${COLORS.backgroundSecondary};

  display: flex;
  flex-direction: row;
  margin: 5rem;
  padding: 6.5rem 3.7rem;
  min-height: calc(100vh - 10rem);
  height: 100%;
  border-radius: 3rem;

  @media ${breakpoints.mobile} {
    flex-direction: column;
    padding: 2rem 2rem 3rem 2rem;
    margin: 2rem 2rem 7rem 2rem;
  }
`;

export const ContainerTweet = styled.div`
  margin-left: 1.7rem;
  max-width: 600px;
  width: 100%;

  @media ${breakpoints.mobile} {
    margin-left: 0;
    max-width: 100%;
    min-width: 100%;
  }
`;

export const ListTweets = styled.ul`
  margin-top: 8rem;
  padding: 0 4.5rem;

  > li {
    &:not(:last-child) {
      margin-bottom: 3.7rem;
    }
  }

  @media ${breakpoints.mobile} {
    padding: 0;
  }
`;

export const ListFeatured = styled.ul`
  margin-left: 14rem;
  max-width: 308px;
  width: 100%;

  > h2 {
    color: ${COLORS.onPrimary};
    margin-bottom: 7.2rem;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }

  @media ${breakpoints.mobile} {
    margin-top: 6rem;
    margin-left: 0;
    max-width: 100%;
    min-width: 100%;

    > h2 {
      margin-bottom: 4rem;
    }
  }
`;

export const Empty = styled.div`
  color: ${COLORS.onPrimary};
  text-align: center;

  img {
    max-width: 3rem;
    margin-top: 3rem;
  }
`;
