import { GetStaticProps } from 'next';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiPlay } from 'react-icons/fi';

import * as S from './styles';
import api from 'services/api';
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString';
import theme from 'styles/theme';

type EpisodeProps = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  description: string;
  duration: number;
  durationAsString: string;
  url: string;
};

type HomeProps = {
  latestEpisodes: EpisodeProps[];
  allEpisodes: EpisodeProps[];
};

export default function Home({ latestEpisodes }: HomeProps) {
  return (
    <S.Homepage>
      <S.LatestEpisodes>
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map(episode => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <S.EpisodeDetails>
                  <a href="">{episode.title}</a>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </S.EpisodeDetails>

                <button type="button">
                  <FiPlay size={22} color={theme.colors.green500} />
                </button>
              </li>
            );
          })}
        </ul>
      </S.LatestEpisodes>

      <S.AllEpisodes></S.AllEpisodes>
    </S.Homepage>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },

    revalidate: 60 * 60 * 8,
  };
};
