import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import api from 'services/api';

import * as UserActions from 'store/modules/user/actions';
import { User } from 'store/modules/user/types';

import AssetLogo from 'assets/svg/twitter-logo.svg';
import Illustration from 'assets/svg/illustration-login.svg';
import { Search, Users, Comment } from 'styles/icons';

import { Centralized, Modal, H1, H2, Button } from 'components';

import {
  Container,
  TwitterLogo,
  Form,
  Header,
  Footer,
  List,
  Drawing,
} from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  const { t } = useTranslation(['login']);

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await api.post('users', { username });

      const user: User = response.data;

      dispatch(UserActions.addUser(user));

      setUsername('');

      setLoading(false);

      history.push('/settings');
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('persist:root');

    if (getLocalStorage) {
      const arr = JSON.parse(getLocalStorage || '');

      const data = JSON.parse(arr.data || '');

      if (data.user) history.push('/home');
    }
  }, [history]);

  return (
    <Container>
      <Centralized>
        <Header>
          <TwitterLogo src={AssetLogo} alt="Reinvented Twitter" />
          <H1>{t('title')}</H1>
        </Header>

        <Modal>
          <H2>{t('subtitle')}</H2>

          <Form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder={t('placeholder.login')}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
            <Button
              type="submit"
              loading={loading}
              disabled={username.length === 0}
            >
              {t('login')}
            </Button>
          </Form>
        </Modal>

        <Footer>
          <List>
            <li>
              <img src={Search} alt={t('list.0')} />
              <h3>{t('list.0')}</h3>
            </li>

            <li>
              <img src={Users} alt={t('list.1')} />
              <h3>{t('list.1')}</h3>
            </li>

            <li>
              <img src={Comment} alt={t('list.2')} />
              <h3>{t('list.2')}</h3>
            </li>
          </List>

          <Drawing src={Illustration} />
        </Footer>
      </Centralized>
    </Container>
  );
};

export default connect()(Login);
