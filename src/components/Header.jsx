import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import MenuTab from './UI/MenuTab'

const menuTabs = [{}, {}, {}]

export default function Header() {
	return (
		<div style={{ position: 'fixed' }}>
			<Box>
				<Image />
				{menuTabs.map((menuTab, index) => (
					<MenuTab key={index} />
				))}
			</Box>
		</div>
	)
}
