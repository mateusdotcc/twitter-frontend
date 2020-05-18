import styled from 'styled-components';

import { COLORS } from 'styles/colors';

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
`;

export const Container = styled.main`
  h1 {
    max-width: 452px;
  }

  h2 {
    color: ${COLORS.onSecondary};

    margin-bottom: 3.1rem;
  }
`;

export const Header = styled.header``;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 2.3rem;
    width: 16rem;
  }
`;

export const List = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 1.7rem;
    }
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
`;
