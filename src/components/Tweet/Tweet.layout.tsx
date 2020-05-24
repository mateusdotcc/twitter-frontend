import React from 'react';
import { useSelector } from 'react-redux';

import { UserState } from 'store/modules/user/types';

import { Loop, Chat, Heart } from 'styles/icons';

import { Avatar } from 'components';

import { Container, Content, Username, Message, List } from './Tweet.styled';

interface Props {
  message: string;
}

const Tweet: React.FC<Props> = (props: Props) => {
  const { message } = props;

  const user = useSelector((state: UserState) => state.data?.user);

  return (
    <Container>
      <Avatar image={user?.avatar} />

      <Content>
        <Username>
          {user?.name}
          <span>{`@${user?.user}`}</span>
        </Username>

        <Message>{message}</Message>

        <List>
          <li>
            <img src={Loop} alt="Retweets" />
            <span>{Math.floor(Math.random() * 10)}</span>
          </li>

          <li>
            <img src={Chat} alt="Conversations" />
            <span>{Math.floor(Math.random() * 10)}</span>
          </li>

          <li>
            <img src={Heart} alt="Likes" />
            <span>{Math.floor(Math.random() * 10)}</span>
          </li>
        </List>
      </Content>
    </Container>
  );
};

export default Tweet;
