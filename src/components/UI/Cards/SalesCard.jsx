import { Card, Stack, Box, Typography, Button, styled } from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Image from 'next/image'
import dayjs from 'dayjs'
import ImageSlider from '../ImageSlider'
import scales from '@/assets/img/scales.svg'
import Calendar from '../Icons/Calendar'

const OpenPickerIcon = styled(Calendar)({
	backgroundColor: 'red',
})

export default function SalesCard({ card }) {
	const today = new Date()
	return (
		<Card className='card card__sales'>
			<Box className='card__sales-top'>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					width={'93%'}
					pb={1}
				>
					<Stack direction='row' alignItems='center' gap={2}>
						<Image src={scales.src} alt='Համեմատել' width={20} height={20} />
						<Typography variant='sales__card_compare'>Համեմատել</Typography>
					</Stack>
					<FavoriteBorderOutlined width={24} height={24} />
				</Stack>
				<ImageSlider images={card.images} />
				<Typography variant='sales__card_code'>ԿՈԴ - {card.code}</Typography>
			</Box>
			<Box className='card__sales-bottom'>
				{card.exclusive && (
					<Typography variant='sales__card_exclusive'>Էքսկլյուզիվ</Typography>
				)}
				<span>
					<Typography variant='sales__card_price'>{card.price} </Typography>
					<Typography variant='sales__card_currency'> Դ.</Typography>
				</span>
				<Typography variant='sales__card_title'>{card.title}</Typography>
				<Typography variant='sales__card_properties'>
					Ընդ. մակերես {card.size} մ²
				</Typography>
				<Typography variant='sales__card_properties'>
					Հարկ {card.floor}
				</Typography>
				<Typography variant='sales__card_properties'>
					Սենյակներ {card.rooms}
				</Typography>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					width={'100%'}
				>
					<Box width={102} display='flex' alignItems='center'>
						<DatePicker
							defaultValue={dayjs(today)}
							size='small'
							format='DD.MM'
							className='card__sales-datepicker'
							slots={{
								openPickerIcon: OpenPickerIcon,
							}}
							slotProps={{
								inputAdornment: {
									position: 'start',
								},
								textField: { sx: { borderRadius: 8 } },
							}}
						/>
					</Box>
					<Button variant='contained'>Դիտել</Button>
				</Stack>
			</Box>
		</Card>
	)
}
