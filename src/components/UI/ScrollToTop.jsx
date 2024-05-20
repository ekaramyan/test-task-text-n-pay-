import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import { ExpandLessOutlined } from '@mui/icons-material'

export default function ScrollToTop() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setShow(true)
			} else {
				setShow(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<Zoom in={show}>
			<Fab
				color='white'
				onClick={handleClick}
				sx={{
					position: 'fixed',
					bottom: 45,
					right: 96,
					zIndex: 1000,
					background: '#fff',
					border: '1px solid rgba(53, 96, 177, 1)',
					boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.15)',
					boxShadow: '-2px -2px 8px 0px rgba(0, 0, 0, 0.15)',
					cursor: 'pointer',
				}}
			>
				<ExpandLessOutlined fontSize='large' sx={{ color: '#3560b1' }} />
			</Fab>
		</Zoom>
	)
}
