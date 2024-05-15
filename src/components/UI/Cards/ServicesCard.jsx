import { Card } from '@mui/material'
import React from 'react'
import ServicesDropdown from '../ServicesDropdown'
import Image from 'next/image'

export default function ServicesCard({ card }) {
	return (
		<Card className='card card__services'>
			<Image src={card.image} alt='services' layout='fill' objectFit='cover' />
			<ServicesDropdown card={card} />
		</Card>
	)
}
