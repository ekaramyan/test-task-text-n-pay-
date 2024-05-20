import HeadingBlock from '@/containers/HeadingBlock'
import ServicesBlock from '@/containers/ServicesBlock'
import StatsBlock from '@/containers/StatsBlock'
import SalesBlock from '@/containers/SalesBlock'
import { Box, Container } from '@mui/material'
import ScrollToTop from '@/components/UI/ScrollToTop'

export default function index() {
	return (
		<>
			<HeadingBlock />
			<Box
				sx={{
					borderRadius: '32px 32px 0 0',
					background: '#fff',
					marginTop: '-33px',
				}}
			>
				<Container fluid maxWidth='xl'>
					<StatsBlock />
					<ServicesBlock />
					<SalesBlock />
					<ScrollToTop/>
				</Container>
			</Box>
		</>
	)
}
