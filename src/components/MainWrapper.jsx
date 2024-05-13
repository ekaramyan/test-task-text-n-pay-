import { Typography, Box } from '@mui/material'
import { Container } from '@mui/system'

export default function MainWrapper({
	header,
	headerVariant,
	subheader,
	subheaderVariant,
	children,
}) {
	return (
		<Container>
			{header && <Typography variant={headerVariant}>{header}</Typography>}
			{subheader && (
				<Typography variant={subheaderVariant}>{subheader}</Typography>
			)}
			<Box>{children}</Box>
		</Container>
	)
}
