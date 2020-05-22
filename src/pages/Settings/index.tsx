import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import api from 'services/api';

import * as UserActions from 'store/modules/user/actions';

import { UserState } from 'store/modules/user/types';

import { ArrowRight, Image } from 'styles/icons';
import IconAvatar from 'assets/svg/avatar.svg';
import IconCover from 'assets/svg/cover.svg';

import { Centralized, Modal, H1, Button } from 'components';

import { Container, Form, ButtonSkip, DropContainer } from './styles';

const Settings: React.FC = () => {
  const { t } = useTranslation(['settings']);

  const history = useHistory();

  const dispatch = useDispatch();

  // const [avatar, setAvatar] = useState<File | null>();

  // const [cover, setCover] = useState<File | null>();

  const [username, setUsername] = useState('');

  const user = useSelector((state: UserState) => state.data?.user);

  const loading = useSelector((state: UserState) => state.data?.loading);

  function handleChangeAvatar(file: any): void {
    // setAvatar(file[0]);
  }

  function handleChangeCover(file: any): void {
    // setCover(file[0]);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      dispatch(UserActions.toggleLoading());

      const data = new FormData();
      // if (avatar) data.append('file', avatar, avatar.name);
      if (username) data.append('name', username);

      await api.put(`/users/${user?._id}`, data);

      dispatch(UserActions.updateUser({ name: username }));

      setUsername('');

      history.push('/home');
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  function handleSkip(): void {
    history.push('/home');
  }

  return (
    <Container>
      <Centralized>
        <Modal>
          <H1>{t('title')}</H1>

          <Form onSubmit={handleSubmit}>
            <div>
              <DropContainer>
                <img className={'icon-over'} src={Image} alt="" />
                <img src={user?.avatar || IconAvatar} alt="User Avatar" />
                <input
                  type="file"
                  accept="image/*"
                  name="file-0"
                  onChange={(event) => handleChangeAvatar(event.target.files)}
                />
              </DropContainer>
              <DropContainer width="27.9rem">
                <img className={'icon-over'} src={Image} alt="" />
                <img src={user?.cover || IconCover} alt="User cover image" />
                <input
                  type="file"
                  accept="image/*"
                  name="file-1"
                  onChange={(event) => handleChangeCover(event.target.files)}
                />
              </DropContainer>
            </div>

            <input
              type="text"
              value={username}
              placeholder={t('placeholder.username')}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />

            <Button
              type="submit"
              loading={loading}
              disabled={username.length === 0}
            >
              {t('button.letsGo')}
            </Button>
          </Form>
        </Modal>

        <ButtonSkip
          variant="secondary"
          suffix={ArrowRight}
          onClick={handleSkip}
        >
          {t('button.skip')}
        </ButtonSkip>
      </Centralized>
    </Container>
  );
};

export default Settings;
