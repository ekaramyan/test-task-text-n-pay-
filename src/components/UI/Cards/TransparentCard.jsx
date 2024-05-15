import { Fragment } from 'react'
import { Button, Card, Typography } from '@mui/material'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function TransparentCard({ card, variant }) {
	return (
		<Card className='card card__transparent'>
			<Image src={card.icon} alt='card' width={200} height={200} />
			<Typography variant={`${variant}_title`} component='p'>
				<ReactMarkdown components={{ p: Fragment }}>{card.title}</ReactMarkdown>
			</Typography>
			<Button variant={`${variant}_button`}>
				<ReactMarkdown components={{ p: Fragment }} />
				{card.button.title}
			</Button>
		</Card>
	)
}
