import { Box, Container, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import MenuTab from './UI/MenuTab'
import { headerTabs } from '@/dataObjects'
import logo from '@/assets/img/logo.svg'

export default function Header() {
	return (
		<header className='header'>
			<Container fluid maxWidth='xxl' sx={{ padding: '0 135px !important' }}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Image
						src={logo.src}
						alt='logo'
						width={237.5}
						height={38}
						className='header__icon'
					/>
					<Stack direction='row' spacing={3}>
						{headerTabs.map(headerTab => (
							<MenuTab key={headerTab.id} tab={headerTab} variant='menu' />
						))}
					</Stack>
				</Stack>
			</Container>
		</header>
	)
}
