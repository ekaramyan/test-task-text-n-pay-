import { Stack, Typography } from '@mui/material'
import Image from 'next/image'

export default function PropertyWithIcon({ icon, title, variant }) {
	return (
		<Stack display='flex' flexDirection='row' alignItems='center' gap={1}>
			<Image src={icon} alt={title} width={20} height={20} />
			<Typography variant={variant}>{title}</Typography>
		</Stack>
	)
}
