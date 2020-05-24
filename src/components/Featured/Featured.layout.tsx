import React from 'react';

import { Star } from 'styles/icons';

import { Avatar } from 'components';

import {
  Container,
  Content,
  Title,
  Count,
  Description,
} from './Featured.styled';

interface Trending {
  name: string;
  description: string;
  avatar: string;
  stars: number;
  url: string;
}

interface Props {
  data: Trending;
}

const Featured: React.FC<Props> = (props: Props) => {
  const { data } = props;

  return (
    <Container>
      <a href={data.url} target="_blank" rel="noreferrer noopener">
        <Avatar image={data.avatar} />

        <Content>
          <Title>{data.name}</Title>
          <Count>
            {data.stars}
            <img src={Star} alt="Rating" />
          </Count>
          <Description>{data.description}</Description>
        </Content>
      </a>
    </Container>
  );
};

export default Featured;
