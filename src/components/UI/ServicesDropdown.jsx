import { Typography } from '@mui/material'
import React from 'react'

export default function ServicesDropdown({ card }) {
	return (
		<div className='card__services-dropdown'>
			<Typography variant='services__card_title'>{card.title}</Typography>
			<Typography variant='services__card_comment'>{card.comment}</Typography>
		</div>
	)
}
