import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Head from 'next/head'
import '@/app/globals.scss'
import theme from '../Theme'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<ThemeProvider theme={theme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</LocalizationProvider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
