import React from 'react';

import { Container } from './styles';

interface Props {
  image?: string;
  alt?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Avatar: React.FC<Props> = (props: Props) => {
  const { image = '', alt = '', disabled = false, onClick } = props;

  return (
    <Container onClick={onClick} disabled={disabled}>
      {image && <img src={image} alt={alt} />}
    </Container>
  );
};

export default Avatar;
