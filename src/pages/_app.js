import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import '../style/reset.scss'
import theme from '../Theme'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	)
}

export default MyApp
