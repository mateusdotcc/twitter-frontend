import React from 'react';

import { Container } from './Cover.styled';

interface Props {
  image?: string;
  alt: string;
}

const Cover: React.FC<Props> = (props: Props) => {
  const { image = '', alt } = props;

  return <Container>{image && <img src={image} alt={alt} />}</Container>;
};

export default Cover;
