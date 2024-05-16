import { Box, Stack, Typography } from '@mui/material'
import FooterTab from './UI/FooterTab'

export default function TabList({ title, list }) {
	return (
		<Stack display='flex' gap={3}>
			<Typography variant='footer__properties_title'>{title}</Typography>
			<Stack display='flex' alignItems='flex-start'>
				{list.map((item, index) => (
					<FooterTab key={index} tab={item} variant='footer__properties' />
				))}
			</Stack>
		</Stack>
	)
}
