import { Container, Box, Stack } from '@mui/material'
import Image from 'next/image'
import { footerData } from '@/dataObjects'
import logo from '@/assets/img/footer_logo.svg'
import PropertiesList from './PropertiesList'
import Link from 'next/link'
import TabList from './TabList'

const { contacts, sales, rent } = footerData
console.log(sales)
export default function Footer() {
	return (
		<footer className='footer'>
			<Container
				fluid
				maxWidth='xxl'
				sx={{ padding: '75px 135px 250px !important' }}
			>
				<Box display='flex' flexDirection='row' justifyContent='space-between'>
					<Stack display='flex' flexDirection='column' gap={5}>
						<Image src={logo.src} alt='logo' width={450} height={37} />
						<PropertiesList
							title={contacts.title}
							list={contacts.contactInfo}
						/>
						<Box display='flex' gap={4}>
							{contacts.socials.map((social, index) => (
								<Link
									key={index}
									href={social.link}
									target='_blank'
									style={{
										border: '1px solid rgba(0, 19, 54, 0.65)',
										borderRadius: '50%',
										padding: 8,
										maxWidth: 48,
									}}
								>
									<Image
										src={social.icon}
										alt={social.link}
										width={32}
										height={32}
									/>
								</Link>
							))}
						</Box>
					</Stack>
					<TabList title={sales.title} list={sales.salesTabs} />
					<TabList title={rent.title} list={rent.rentTabs} />
				</Box>
			</Container>
		</footer>
	)
}
