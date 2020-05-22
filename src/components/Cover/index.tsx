import React from 'react';

import { Container } from './styles';

interface Props {
  image?: string;
}

const Cover: React.FC<Props> = (props: Props) => {
  const { image = '' } = props;

  return (
    <Container>{image && <img src={image} alt="User cover image" />}</Container>
  );
};

export default Cover;
