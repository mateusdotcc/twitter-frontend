import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { breakpoints } from 'styles/breakpoints';

export const Icon = styled.img``;

export const TwitterLogo = styled.img`
  align-self: flex-start;
  margin-bottom: 3.4rem;
  max-width: 70px;
`;

export const Drawing = styled.img`
  position: absolute;
  top: -80px;
  right: 25px;

  @media ${breakpoints.mobile} {
    display: none;
  }
`;

export const Container = styled.main`
  h1 {
    max-width: 452px;
  }

  h2 {
    color: ${COLORS.onSecondary};

    margin-bottom: 3.1rem;
  }

  @media ${breakpoints.mobile} {
    margin: 5rem 0;

    h1 {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const Header = styled.header`
  @media ${breakpoints.mobile} {
    max-width: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 2.3rem;
    width: 16rem;
  }

  @media ${breakpoints.mobile} {
    flex-direction: column;

    button {
      margin: 2rem 0 0 0;
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    flex-direction: row;

    &:not(:last-child) {
      margin-bottom: 1.7rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  img {
    margin-right: 1.2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: 6.2rem auto 0 auto;
  padding: 0 4.5rem;
  width: 54rem;

  @media ${breakpoints.mobile} {
    flex-direction: column;
    max-width: 400px;
    width: 100%;
  }
`;
