import { Container, Box, Stack } from '@mui/material'
import Image from 'next/image'
import { footerData } from '@/dataObjects'
import logo from '@/assets/img/footer_logo.svg'
import PropertiesList from './PropertiesList'
import PropertyWithIcon from '@/components/UI/PropertyWithIcon'
import FooterTab from '@/components/UI/FooterTab'
import SocialLinkIcon from './UI/Icons/SocialLinkIcon'

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
							variant={'contacts'}
							renderItem={item => (
								<PropertyWithIcon
									title={item.title}
									icon={item.icon}
									variant='footer__properties'
								/>
							)}
						/>
						<Box display='flex' gap={4}>
							{contacts.socials.map((social, index) => (
								<SocialLinkIcon key={index} social={social} />
							))}
						</Box>
					</Stack>
					<PropertiesList
						title={sales.title}
						list={sales.salesTabs}
						variant={'properties'}
						renderItem={item => (
							<FooterTab tab={item} variant='footer__properties' />
						)}
					/>
					<PropertiesList
						title={rent.title}
						list={rent.rentTabs}
						variant={'properties'}
						renderItem={item => (
							<FooterTab tab={item} variant='footer__properties' />
						)}
					/>
				</Box>
			</Container>
		</footer>
	)
}
