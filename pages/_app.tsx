import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import CharactersProvider from '../context/charactersContext';
import { ThemeProvider } from 'emotion-theming';
import { lighten } from 'polished';

const theme = {
    background: '#100A0D',
    primaryBorder: '2px solid #7a7acc',
    gradient: 'to bottom, #da1b60, #ff8a00',
    gradientTop: '#da1b60',
    gradientBottom: '#ff8a00',
    gradientDirection: 'to bottom',
    text: {
        primary: '#a1a1af',
        secondary: `${lighten(0.7, '#a1a1af')}`,
    },
};

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CharactersProvider>
                <>
                    <Global
                        styles={css`
                            ${emotionReset}

                            *, *::after, *::before {
                                box-sizing: border-box;
                                -moz-osx-font-smoothing: grayscale;
                                -webkit-font-smoothing: antialiased;
                            }

                            @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

                            body {
                                font-family: 'Roboto Mono', monospace;
                                background: ${theme.background};
                                color: ${theme.text.primary};
                            }
                        `}
                    />

                    <Component {...pageProps} />
                </>
            </CharactersProvider>
        </ThemeProvider>
    );
}

export default MyApp;
