import { IconButton } from '@mui/material'
import Image from 'next/image'
import calendar from '@/assets/img/calendar.svg'

export default function Calendar() {
	return <Image src={calendar.src} alt='date picker' width={20} height={20} />
}
