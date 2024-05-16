import { Button, Typography } from '@mui/material'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
export default function MenuTab({ tab, variant }) {
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
			{tab?.subTabs && (
				<Typography variant={`${variant}`}>
					<KeyboardArrowRightOutlinedIcon fontSize='small' />
				</Typography>
			)}
			<Button variant={`${variant}`} href={tab.link}>
				{tab?.title}
			</Button>
		</div>
	)
}
