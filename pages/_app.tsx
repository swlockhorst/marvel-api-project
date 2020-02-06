import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
// import App from 'next/app'
// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
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
                    /* body {
                        background: #000000;
                        color: #0c833d;

                        a {
                            color: #14f074 !important;
                        }

                        input {
                            background: #063315;
                            border-color: #002b0d;
                            color: #0c833d;
                        }

                        button {
                            background: #063315;
                            border-color: #002b0d;
                            color: #0c833d;
                        }
                    } */
                `}
            />
            <Component {...pageProps} />
        </>
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
