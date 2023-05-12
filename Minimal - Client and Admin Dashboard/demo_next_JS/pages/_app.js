// scroll bar
import 'simplebar/src/simplebar.css';
// editor
import 'react-quill/dist/quill.snow.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// material
import { NoSsr } from '@material-ui/core';
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
// theme
import ThemeConfig from 'src/theme';
// utils
import createEmotionCache from 'src/utils/createEmotionCache';
// components
import Settings from 'src/components/settings';
import RtlLayout from 'src/components/RtlLayout';
import LoadingScreen from 'src/components/LoadingScreen';
import TopProgressBar from 'src/components/TopProgressBar';
import ThemePrimaryColor from 'src/components/ThemePrimaryColor';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SettingsProvider>
      <CollapseDrawerProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>

          <ThemeConfig>
            <ThemePrimaryColor>
              <RtlLayout>
                <NoSsr>
                  <Settings />
                </NoSsr>
                <LoadingScreen />
                <TopProgressBar />
                <Component {...pageProps} />
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
    </SettingsProvider>
  );
}
