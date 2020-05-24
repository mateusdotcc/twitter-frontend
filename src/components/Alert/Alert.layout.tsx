import React from 'react';

import { Container, Card } from './Alert.styled';

interface Props {
  show?: boolean;
  children?: React.ReactNode;
}

const Alert: React.FC<Props> = (props: Props) => {
  const { children, show = false } = props;

  return (
    <Container className={show ? 'show' : ''}>
      <Card>{children}</Card>
    </Container>
  );
};

export default Alert;
