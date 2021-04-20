import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import * as S from 'styles/app';
import { Header } from 'components/Header';
import { Player } from 'components/Player';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </S.Wrapper>
    </ThemeProvider>
  );
}

export default MyApp;
