import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/Theme";
import "normalize.css";
import { AppProps } from "next/app";
import "../../public/styles/global.css";

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
