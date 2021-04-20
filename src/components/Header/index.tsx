import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });
  return (
    <S.Header>
      <img src="/logo.svg" alt="" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </S.Header>
  );
}
