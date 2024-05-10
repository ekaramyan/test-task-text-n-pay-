import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainSection from '@/containers/MainSection'
import { Container } from '@mui/material'

export default function index() {
	return (
		<>
			<Header />
			<Container>
				<MainSection />
				<div>index</div>
			</Container>
			<Footer />
		</>
	)
}
