import StatsItem from '@/components/UI/StatsItem'
import { Box, Divider } from '@mui/material'
import { Fragment } from 'react'
import { statsData } from '@/dataObjects'

export default function StatsBlock() {
	return (
		<Box display='flex' justifyContent='center' pt={15} gap={12}>
			{statsData.map((item, index) => (
				<Fragment key={item.id}>
					<StatsItem count={item.count} comment={item.comment} />
					{index !== statsData.length - 1 && (
						<Divider
							orientation='vertical'
							variant='middle'
							flexItem
							sx={{ borderRightWidth: 2 }}
						/>
					)}
				</Fragment>
			))}
		</Box>
	)
}
