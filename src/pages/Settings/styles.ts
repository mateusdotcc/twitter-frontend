import styled from 'styled-components';
import { lighten, rgba } from 'polished';

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

  button {
    margin: 3.7rem auto 0;
    width: 20rem;
  }

  ${ButtonSkip} {
    width: 24.4rem;
  }

  @media ${breakpoints.mobile} {
    h1 {
      text-align: center;
    }

    button {
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
  border-radius: 3rem;
  overflow: hidden;
  transition: background-color 0.25s;
  cursor: pointer;

  &:after {
    background-color: ${rgba(COLORS.onPrimary, 0)};

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.25s;
  }

  &:hover {
    background-color: ${lighten(0.1, COLORS.onPrimary)};

    .icon-over {
      opacity: 1;
    }

    &:after {
      background-color: ${rgba(COLORS.onPrimary, 0.5)};
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
  }
`;
