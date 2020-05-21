import styled, { css } from 'styled-components';

import { COLORS } from 'styles/colors';
import { Medium, Bold } from 'styles/typography';
import { breakpoints } from 'styles/breakpoints';

interface ProfileProps {
  show?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 27.2rem;
  height: 100%;

  @media ${breakpoints.mobile} {
    background-color: ${COLORS.onBackground};

    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    padding: 0 2rem;
    width: 100%;
    height: 5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 5.5rem;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    &:first-child {
      img {
        max-width: 22px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  a {
    text-decoration: none;
  }

  @media ${breakpoints.mobile} {
    padding: 0;
    flex: 1;

    ul {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 6rem;
      width: 100%;
      height: 5rem;
    }

    li:not(:last-child) {
      margin: 0;
    }
  }
`;

export const NavProfile = styled.nav`
  position: fixed;
  bottom: 100px;

  @media ${breakpoints.mobile} {
    position: relative;
    bottom: 0;

    > button {
      min-width: 35px;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 1rem;
    }
  }
`;

export const Profile = styled.div<ProfileProps>`
  color: ${COLORS.onSecondary};
  background-color: ${COLORS.onBackground};

  opacity: 0;
  visibility: hidden;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 2.7rem 3.2rem 2.7rem;
  width: 27.2rem;
  height: auto;
  border-radius: 3rem;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
  transition: opacity 0.25s, visibility 0.25s;

  &:after {
    content: ' ';
    top: 100%;
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${COLORS.onBackground};
    border-width: 1.2rem;
    margin-left: -1.2rem;
  }

  ${({ show }) =>
    show &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Title = styled.h1`
  font-weight: ${Medium};

  margin-bottom: 0.4rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  line-height: 2.8rem;
`;

export const Username = styled.h2`
  font-weight: ${Bold};
  line-height: 1.8rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.2rem;
`;

export const Description = styled.p`
  margin-bottom: 2.9rem;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1.8rem 0 2.1rem;

  li {
    font-weight: ${Bold};

    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 1.2rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    img {
      margin-right: 1rem;
      width: 1.4rem;
    }
  }

  a {
    color: ${COLORS.onPrimary};

    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

export const ListFollow = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    font-size: 1.2rem;
    font-weight: ${Medium};
  }

  span {
    font-weight: ${Bold};

    margin-right: 0.5rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
`;
