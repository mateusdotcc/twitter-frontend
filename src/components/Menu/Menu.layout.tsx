import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { persistor } from 'store';
import { useHistory, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UserState } from 'store/modules/user/types';

import { Avatar, Cover } from 'components';

import { TwitterLogo, Cog, Users, Letter, Share, SingOut } from 'styles/icons';

import {
  Container,
  Nav,
  NavProfile,
  Profile,
  Title,
  Username,
  Description,
  List,
  ListFollow,
  Button,
} from './Menu.styled';

const Menu: React.FC = () => {
  const history = useHistory();

  const { t } = useTranslation(['home']);

  const refProfile = useRef<HTMLDivElement>(null);

  const [openProfile, setOpenProfile] = useState(false);

  const user = useSelector((state: UserState) => state.data?.user);

  function handleSignOut(): void {
    persistor.purge();
    history.push('/');
  }

  useEffect(() => {
    if (refProfile.current) {
      const heightProfile = refProfile.current.clientHeight + 20;

      refProfile.current.style.top = `-${heightProfile}px`;
    }
  }, []);

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <img src={TwitterLogo} alt="Back to login" />
            </Link>
          </li>

          <li>
            <Link to="settings">
              <img src={Cog} alt="Go to Settings" />
            </Link>
          </li>

          <li>
            <Button onClick={handleSignOut}>
              <img src={SingOut} alt="Sing Out" />
            </Button>
          </li>
        </ul>
      </Nav>

      <NavProfile>
        <Avatar
          image={user?.avatar}
          onClick={() => setOpenProfile(!openProfile)}
        />

        <Profile ref={refProfile} show={openProfile}>
          <Cover image={user?.cover} alt="User Cover" />

          <Title>{user?.name}</Title>
          <Username>{`@${user?.user}`}</Username>

          <List>
            {user?.company && (
              <li>
                <img src={Users} alt="User Company" />
                {user?.company}
              </li>
            )}

            {user?.email && (
              <li>
                <img src={Letter} alt="User Mail" />
                <a href={`mailto:${user?.email}`}>{user?.email}</a>
              </li>
            )}

            {user?.blog && (
              <li>
                <img src={Share} alt="User Blog" />
                <a href={user?.blog} target="_blank" rel="noreferrer noopener">
                  {user?.blog}
                </a>
              </li>
            )}
          </List>

          {user?.bio && <Description>{user?.bio}</Description>}

          <ListFollow>
            <li>
              <span>{user?.following || 0}</span>
              {t('following')}
            </li>
            <li>
              <span>{user?.followers || 0}</span>
              {t('followers')}
            </li>
          </ListFollow>
        </Profile>
      </NavProfile>
    </Container>
  );
};

export default Menu;
