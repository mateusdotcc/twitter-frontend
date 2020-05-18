import React from 'react';

import { Container } from './styles';

interface Props {
  photo?: string;
}

const Cover: React.FC<Props> = (props: Props) => {
  const { photo = '' } = props;

  return <Container>{photo && <img src={photo} alt="" />}</Container>;
};

export default Cover;
