import { Button, Typography } from '@mui/material'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'

export default function ServicesDropdown({ card }) {
	return (
		<div className='card__services-dropdown'>
			<Typography variant='services__card_title'>{card.title}</Typography>
			<Typography variant='services__card_comment'>{card.comment}</Typography>
			<Button variant='card__services_button'>
				Դիտել  <EastOutlinedIcon fontSize='4px' />
			</Button>
		</div>
	)
}
