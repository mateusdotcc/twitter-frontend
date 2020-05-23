import styled from 'styled-components';

import { COLORS } from 'styles/colors';
import { breakpoints } from 'styles/breakpoints';

import { Button } from 'components';

export const TweetButton = styled(Button)`
  align-self: flex-end;
  margin-top: 1rem;
  width: 14.5rem;

  @media ${breakpoints.mobile} {
    width: 100%;
  }
`;

export const Container = styled.form`
  background-color: ${COLORS.onBackground};

  display: flex;
  flex-direction: column;
  padding: 3.7rem 4.5rem 6.2rem;
  max-width: 600px;
  width: 100%;
  height: 22.5rem;
  border-radius: 3.5rem;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.mobile} {
    padding: 2rem;
    max-width: 100%;
    border-radius: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextArea = styled.textarea`
  flex: 1;
  margin-left: 2.5rem;
  padding-top: 1rem;
  height: 7rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border: 0;
  background-color: transparent;
  resize: none;

  @media ${breakpoints.mobile} {
    height: 12rem;
  }
`;
