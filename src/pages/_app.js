import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import theme from '../Theme'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
