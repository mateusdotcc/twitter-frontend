import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import api from 'services/api';
import * as UserActions from 'store/modules/user/actions';
import { UserState } from 'store/modules/user/types';

import { ArrowRight, Image, Close } from 'styles/icons';
import { Centralized, Modal, H1, Button, Alert } from 'components';
import {
  Container,
  Form,
  ButtonSkip,
  DropContainer,
  WrapDropContainer,
  ButtonRemove,
} from './Settings.styled';

const Settings: React.FC = () => {
  const { t } = useTranslation(['common', 'settings']);

  const history = useHistory();
  const dispatch = useDispatch();

  const [avatarFile, setAvatarFile] = useState<File | any>('');
  const [coverFile, setCoverFile] = useState<File | any>('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [coverPreview, setCoverPreview] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const user = useSelector((state: UserState) => state.data?.user);
  const loading = useSelector((state: UserState) => state.data?.loading);

  function handleChange(input: any): void {
    let file = input.files[0];
    let preview = URL.createObjectURL(file);

    if (input.name === 'avatar') {
      setAvatarFile(file);
      return setAvatarPreview(preview);
    }

    setCoverFile(file);
    setCoverPreview(preview);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      dispatch(UserActions.toggleLoading());

      const data = new FormData();

      if (username) data.append('name', username);
      if (avatarPreview) data.append('avatar', avatarFile);
      if (coverPreview) data.append('cover', coverFile);

      const response = await api.put(`/users/${user?._id}`, data);

      const { name, avatar, cover } = response.data;

      dispatch(
        UserActions.updateUser({
          name,
          avatar,
          cover,
        }),
      );

      setUsername('');

      history.push('/home');
    } catch (error) {
      console.log('ERROR', error);

      dispatch(UserActions.toggleLoading());

      setError(true);
      setUsername('');
      setAvatarPreview('');
      setCoverPreview('');
    }
  }

  function handleSkip(): void {
    history.push('/home');
  }

  return (
    <Container>
      <Centralized>
        <Modal>
          <H1>{t('settings:title')}</H1>

          <Form onSubmit={handleSubmit}>
            <div>
              <DropContainer>
                {avatarPreview && (
                  <ButtonRemove onClick={() => setAvatarPreview('')}>
                    <img src={Close} alt="Remove" />
                  </ButtonRemove>
                )}
                <WrapDropContainer>
                  <input
                    type="file"
                    accept="image/*"
                    name="avatar"
                    onChange={(event) => handleChange(event.target)}
                  />
                  <img className={'icon-over'} src={Image} alt="Icon Add" />
                  <img
                    src={avatarPreview ? avatarPreview : user?.avatar}
                    alt="User Avatar"
                  />
                </WrapDropContainer>
              </DropContainer>
              <DropContainer width="27.9rem">
                {coverPreview && (
                  <ButtonRemove onClick={() => setCoverPreview('')}>
                    <img src={Close} alt="Remove" />
                  </ButtonRemove>
                )}
                <WrapDropContainer>
                  <input
                    type="file"
                    accept="image/*"
                    name="cover"
                    onChange={(event) => handleChange(event.target)}
                  />
                  <img className={'icon-over'} src={Image} alt="Icon Add" />
                  <img
                    src={coverPreview ? coverPreview : user?.cover}
                    alt="User cover"
                  />
                </WrapDropContainer>
              </DropContainer>
            </div>
            <input
              type="text"
              value={username}
              placeholder={t('settings:placeholder.username')}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
            <Button type="submit" loading={loading}>
              {avatarPreview || coverPreview || username.length > 0
                ? t('settings:button.update')
                : t('settings:button.letsGo')}
            </Button>
          </Form>
        </Modal>
        <ButtonSkip
          variant="secondary"
          suffix={ArrowRight}
          onClick={handleSkip}
        >
          {t('settings:button.skip')}
        </ButtonSkip>
      </Centralized>

      <Alert show={error}>
        <h2>{t('alerts.error')}</h2>
        <Button onClick={() => setError(false)}>{t('buttons.okay')}</Button>
      </Alert>
    </Container>
  );
};

export default Settings;
