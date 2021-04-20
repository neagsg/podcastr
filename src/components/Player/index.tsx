import {
  FiShuffle,
  FiSkipBack,
  FiSkipForward,
  FiPlay,
  FiRepeat,
} from 'react-icons/fi';

import * as S from './styles';

export function Player() {
  return (
    <S.Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <S.EmptyPlayer>
        <strong>Selecione um podcastr para ouvir</strong>
      </S.EmptyPlayer>

      <footer className="empty">
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            <S.EmptySlider />
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        <S.Buttons>
          <button type="button">
            <FiShuffle size={22} color="#fff" />
          </button>
          <button type="button">
            <FiSkipBack size={22} color="#fff" />
          </button>
          <button type="button">
            <FiPlay size={32} color="#fff" />
          </button>
          <button type="button">
            <FiSkipForward size={22} color="#fff" />
          </button>
          <button type="button">
            <FiRepeat size={22} color="#fff" />
          </button>
        </S.Buttons>
      </footer>
    </S.Container>
  );
}
