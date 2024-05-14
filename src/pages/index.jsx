import HeadingBlock from '@/containers/HeadingBlock'
import StatsBlock from '@/containers/StatsBlock'
import { Container } from '@mui/material'

export default function index() {
	return (
		<>
			<HeadingBlock />
			<Container fluid maxWidth='xl'>
				<StatsBlock />
			</Container>
		</>
	)
}
