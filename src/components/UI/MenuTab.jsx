import { Button, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Image from 'next/image'

export default function MenuTab({ tab }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
			}}
		>
			{tab?.icon ? (
				<Image
					src={tab.icon}
					alt={tab?.title}
					width={24}
					height={24}
					className='header__icon'
				/>
			) : (
				<Button variant='menuTab' href={tab.link}>
					{tab?.title}
				</Button>
			)}
			{tab?.subTabs && (
				<Typography variant='menuTab'>
					<ArrowDropDownIcon />
				</Typography>
			)}
		</div>
	)
}
