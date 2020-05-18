import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import api from 'services/api';

import AssetLogo from 'assets/svg/twitter-logo.svg';

import { UserState } from 'store/modules/user/types';

import { H2, Menu, FormTweet, Tweet, Featured } from 'components';

import {
  Container,
  ContainerTweet,
  ListTweets,
  ListFeatured,
  Empty,
} from './styles';

interface RequestTrendings {
  data: [];
}

interface Trending {
  name: string;
  description: string;
  avatar: string;
  stars: number;
  url: string;
}

const Home: React.FC = () => {
  const { t } = useTranslation(['home']);

  const [arrTrendings, arrSetTrendings] = useState<Trending[]>([]);

  const tweets = useSelector((state: UserState) => state.data?.user.tweets);

  useEffect(() => {
    async function getTrendings(): Promise<void> {
      const response: RequestTrendings = await api.get(
        'https://github-trending-api.now.sh/repositories?language=&since=daily',
      );

      const trendings = response.data.slice(0, 5);

      arrSetTrendings(trendings);
    }

    getTrendings();
  }, []);

  return (
    <Container>
      <Menu />

      <ContainerTweet>
        <FormTweet />

        <ListTweets>
          <>
            {tweets
              ?.map((tweet: string, i: number) => (
                <li key={i.toString()}>
                  <Tweet message={tweet} />
                </li>
              ))
              .reverse()}

            {tweets?.length === 0 && (
              <Empty>
                <h3>{t('emptyTweets')}</h3>
                <img src={AssetLogo} alt="" />
              </Empty>
            )}
          </>
        </ListTweets>
      </ContainerTweet>

      <ListFeatured>
        <H2>{t('whatsHappening')}</H2>

        {arrTrendings.map((featured: Trending, i: number) => (
          <li key={i.toString()}>
            <Featured data={featured} />
          </li>
        ))}
      </ListFeatured>
    </Container>
  );
};

export default Home;
