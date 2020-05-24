import React from 'react';

import { Container } from './Modal.styled';

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Modal;
