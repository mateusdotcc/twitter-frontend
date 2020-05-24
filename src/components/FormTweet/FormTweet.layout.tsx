import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import api from 'services/api';

import * as UserActions from 'store/modules/user/actions';
import { UserState } from 'store/modules/user/types';

import { Avatar } from 'components';

import { Container, Content, TextArea, TweetButton } from './FormTweet.styled';

const FormTweet: React.FC = () => {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const { t } = useTranslation(['home']);

  const [tweet, setTweet] = useState('');

  const user = useSelector((state: UserState) => state.data?.user);

  const loading = useSelector((state: UserState) => state.data?.loading);

  async function handleTweet(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      dispatch(UserActions.toggleLoading());

      await api.post(`users/${user?._id}/tweet`, { tweet });

      dispatch(UserActions.addTweets(tweet));

      setTweet('');
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  return (
    <Container ref={formRef} onSubmit={handleTweet}>
      <Content>
        <Avatar image={user?.avatar} disabled />

        <TextArea
          value={tweet}
          placeholder="Write..."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setTweet(e.target.value);
          }}
        />
      </Content>

      <TweetButton
        type="submit"
        loading={loading}
        disabled={tweet.length === 0}
      >
        {t('button.tweet')}
      </TweetButton>
    </Container>
  );
};

export default FormTweet;
