import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import CharactersProvider from '../context/charactersContext';
import { ThemeProvider } from 'emotion-theming';

const theme = {
    colors: {
        background: '#0000',
        green: '#0c833d',
        yellow: '#D89E40',
        red: '#F6564C',
    },
};

// import App from 'next/app'
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
                                font-smoothing: antialiased;
                            }

                            @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

                            body {
                                font-family: 'Roboto Mono', monospace;
                                background: #000;
                                color: #d89e40;
                            }
                        `}
                    />

                    <Component {...pageProps} />
                </>
            </CharactersProvider>
        </ThemeProvider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
