import { Box, Stack, Typography } from '@mui/material'

import { Fragment } from 'react'

export default function PropertiesList({ title, list, variant, renderItem }) {
	return (
		<Stack display='flex' gap={3}>
			<Typography variant={`footer__${variant}_title`}>{title}</Typography>
			<Stack display='flex' gap={2.5} justifyContent='flex-start'>
				{list?.map((item, index) => (
					<Fragment key={index}>{renderItem(item, index)}</Fragment>
				))}
			</Stack>
		</Stack>
	)
}
