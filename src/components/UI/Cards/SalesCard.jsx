import { Card, Stack, Box, Typography, Button, styled } from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Image from 'next/image'
import dayjs from 'dayjs'
import ImageSlider from '../ImageSlider'
import scales from '@/assets/img/scales.svg'
import Calendar from '../Icons/Calendar'
import PropertyWithIcon from '../PropertyWithIcon'
import sizeIcon from '@/assets/img/sizeIcon.svg'
import roomIcon from '@/assets/img/roomIcon.svg'
import floorIcon from '@/assets/img/floorIcon.svg'

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
					<Typography variant='sales__card_price'>
						{card.price.toLocaleString('de-DE')}{' '}
					</Typography>
					<Typography variant='sales__card_currency'> Դ.</Typography>
				</span>
				<Typography variant='sales__card_title'>{card.title}</Typography>
				<div className='card__sales-bottom-properties'>
					<PropertyWithIcon
						icon={sizeIcon.src}
						title={`Ընդ. մակերես ${card.size} մ²`}
						variant='sales__card_properties'
					/>
					<PropertyWithIcon
						icon={floorIcon.src}
						title={`Հարկ ${card.floor}`}
						variant='sales__card_properties'
					/>
					<PropertyWithIcon
						icon={roomIcon.src}
						title={`Սենյակներ ${card.rooms}`}
						variant='sales__card_properties'
					/>
				</div>
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
					<Button variant='sales__card_button'>Դիտել</Button>
				</Stack>
			</Box>
		</Card>
	)
}
