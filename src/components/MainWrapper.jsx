import { Fragment } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { Container } from '@mui/system'
import ReactMarkdown from 'react-markdown'

export default function MainWrapper({ header, variant, subheader, children }) {
	return (
		<Container fluid maxWidth='xl' className='main-wrapper__container'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				gap={3}
				p={2}
			>
				{header && (
					<Typography variant={`${variant}_header`} component={'h1'}>
						{header}
					</Typography>
				)}
				{subheader && (
					<Typography variant={`${variant}_subheader`} component={'h2'}>
						<ReactMarkdown components={Fragment}>{subheader}</ReactMarkdown>
					</Typography>
				)}
			</Box>
			<Stack direction='row' alignItems='center' spacing={8}>
				{children}
			</Stack>
		</Container>
	)
}
