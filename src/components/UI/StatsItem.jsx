import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function StatsItem({ count, comment }) {
	return (
		<Stack>
			<Typography variant='stats_count'>{count}</Typography>
			<Typography variant='stats_comment'>{comment}</Typography>
		</Stack>
	)
}
