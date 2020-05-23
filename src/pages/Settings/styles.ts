import styled from 'styled-components';
import { rgba } from 'polished';

import { Button } from 'components';
import { COLORS } from 'styles/colors';
import { breakpoints } from 'styles/breakpoints';

interface FileProps {
  width?: string;
  height?: string;
}

export const ButtonSkip = styled(Button)``;

export const Container = styled.main`
  margin: 5rem 0;

  button[type='submit'] {
    margin: 3.7rem auto 0;
    width: 20rem;
  }

  ${ButtonSkip} {
    margin-top: 5rem;
    width: 24.4rem;
  }

  @media ${breakpoints.mobile} {
    h1 {
      text-align: center;
    }

    button[type='submit'] {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3.8rem;
    border: 0;
  }

  @media ${breakpoints.mobile} {
    > div {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const DropContainer = styled.div.attrs({ className: 'dropzone' })<
  FileProps
>`
  width: ${({ width = '15rem' }) => width};
  height: ${({ height = '15rem' }) => height};
  background-color: ${COLORS.tertiary};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: background-color 0.25s;
  border-radius: 3rem;
  cursor: pointer;

  &:hover {
    .icon-over {
      opacity: 1;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .icon-over {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.25s;
    pointer-events: none;
  }

  @media ${breakpoints.mobile} {
    &:first-of-type {
      margin-bottom: 3rem;
    }
  }
`;

export const WrapDropContainer = styled.div`
  border-radius: inherit;
  overflow: hidden;

  &:after {
    background-color: ${rgba(COLORS.onPrimary, 0)};

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: background-color 0.25s;
    pointer-events: none;
  }

  &:hover {
    .icon-over {
      opacity: 1;
    }

    &:after {
      background-color: ${rgba(COLORS.onPrimary, 0.5)};
    }
  }
`;

export const ButtonRemove = styled.button.attrs({ type: 'button' })`
  background-color: ${COLORS.primary};

  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
  margin: 0;
  max-width: 30px;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: background-color 0.25s;

  img {
    position: relative;
    top: 1px;
  }

  &:hover {
    background-color: ${COLORS.onPrimary};
  }
`;
