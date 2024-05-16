import { Box, Stack, Typography } from '@mui/material'
import PropertyWithIcon from './UI/PropertyWithIcon'

export default function PropertiesList({ title, list }) {
	return (
		<Stack display='flex' gap={3}>
			<Typography variant='footer__contacts_title'>{title}</Typography>
			<Stack display='flex' gap={2.5}>
				{list?.map((item, index) => (
					<PropertyWithIcon
						key={index}
						title={item.title}
						icon={item.icon}
						variant='footer__properties'
					/>
				))}
			</Stack>
		</Stack>
	)
}
