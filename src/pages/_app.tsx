import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "../components/Theme";
import "normalize.css";
import { AppProps } from "next/app";
import "@public/styles/global.css";

import Router from 'next/router';
import NProgress from 'nprogress';
import '@public/styles/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const cache = createCache({ key: "css" });
cache.compat = true;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CacheProvider value={cache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* <CssBaseline /> */}
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
