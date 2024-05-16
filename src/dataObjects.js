import language from '@/assets/img/language.svg'
import keyIcon from '@/assets/img/keyIcon.svg'
import rentIcon from '@/assets/img/rentIcon.svg'
import sellICon from '@/assets/img/sellICon.svg'
import services1 from '@/assets/img/services1.jpg'
import services2 from '@/assets/img/services2.jpg'
import services3 from '@/assets/img/services3.jpg'
import sales1 from '@/assets/img/sales1.jpg'
import sales2 from '@/assets/img/sales2.jpg'
import sales3 from '@/assets/img/sales3.jpg'
import geo from '@/assets/img/geo.svg'
import phone from '@/assets/img/phone.svg'
import viber from '@/assets/img/viber.svg'
import whatsapp from '@/assets/img/whatsapp.svg'
import instagram from '@/assets/img/instagram.svg'
import facebook from '@/assets/img/facebook.svg'
import youtube from '@/assets/img/youtube.svg'

export const headerTabs = [
	{ id: 0, title: 'Անշարժ գույք', link: '', subTabs: [] },
	{ id: 1, title: 'Ակցեռն էքսկլյուզիվ', link: '' },
	{ id: 2, title: 'Ծառայություններ', link: '', subTabs: [] },
	{ id: 3, title: 'Մեր մասին', link: '' },
	{ id: 4, title: 'Բլոգ', link: '' },
	{ id: 5, title: 'Հետադարձ կապ', link: '' },
	{ id: 6, title: 'Համեմատել', link: '' },
	{ id: 7, title: 'language', link: '', subTabs: [], icon: language.src },
]

export const headingCards = [
	{
		id: 0,
		title: 'գնել   \n  անշարժ գույք',
		button: { title: 'ԿԱՏԱԼՈԳ', link: '' },
		icon: keyIcon.src,
	},
	{
		id: 1,
		title: 'վարձակալել անշարժ գույք',
		button: { title: 'ԿԱՏԱԼՈԳ', link: '' },
		icon: rentIcon.src,
	},
	{
		id: 2,
		title: 'վաճառել   \n  անշարժ գույք',
		button: { title: 'ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ', link: '' },
		icon: sellICon.src,
	},
]

export const statsData = [
	{ id: 0, count: '30+', comment: 'Տարի շուկայում' },
	{ id: 1, count: '5000+', comment: 'Գոհ հաճախորդ' },
	{ id: 2, count: '5000+', comment: 'Վաճառված գույք' },
]

export const servicesData = [
	{
		id: 0,
		image: services1.src,
		title: 'շինարարություն',
		link: 'button',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue enim at lorem imperdiet, non congue felis laoreet. Maecenas sagittis ullamcorper purus, et dapibus diam semper vitae. Phasellus eros massa, dapibus in turpis non, aliquet tincidunt augue. Sed sodales aliquet vestibulum. Nulla a elit nec lacus cursus ultricies ac eget elit. Nulla tristique dui nisi, id elementum nisl condimentum non. Integer sodales, tellus ut tempor fermentum, eros neque rhoncus nunc, ut aliquam enim arcu eget enim. Donec ut dignissim leo. Nunc eu lacinia velit, commodo porta nisl. Cras in dui ac felis aliquet pretium. Quisque in accumsan est. Quisque id sem ut mauris maximus congue. Morbi at ligula a lacus accumsan elementum ac id enim. Integer sodales neque quis mi commodo ornare.',
	},
	{
		id: 1,
		image: services2.src,
		title: 'ԴԻԶԱՅՆ',
		link: 'button',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue enim at lorem imperdiet, non congue felis laoreet. Maecenas sagittis ullamcorper purus, et dapibus diam semper vitae. Phasellus eros massa, dapibus in turpis non, aliquet tincidunt augue. Sed sodales aliquet vestibulum. Nulla a elit nec lacus cursus ultricies ac eget elit. Nulla tristique dui nisi, id elementum nisl condimentum non. Integer sodales, tellus ut tempor fermentum, eros neque rhoncus nunc, ut aliquam enim arcu eget enim. Donec ut dignissim leo. Nunc eu lacinia velit, commodo porta nisl. Cras in dui ac felis aliquet pretium. Quisque in accumsan est. Quisque id sem ut mauris maximus congue. Morbi at ligula a lacus accumsan elementum ac id enim. Integer sodales neque quis mi commodo ornare.',
	},
	{
		id: 2,
		image: services3.src,
		title: 'ՃԱՐՏԱՐԱՊԵՏՈՒԹՅՈՒՆ',
		link: 'button',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue enim at lorem imperdiet, non congue felis laoreet. Maecenas sagittis ullamcorper purus, et dapibus diam semper vitae. Phasellus eros massa, dapibus in turpis non, aliquet tincidunt augue. Sed sodales aliquet vestibulum. Nulla a elit nec lacus cursus ultricies ac eget elit. Nulla tristique dui nisi, id elementum nisl condimentum non. Integer sodales, tellus ut tempor fermentum, eros neque rhoncus nunc, ut aliquam enim arcu eget enim. Donec ut dignissim leo. Nunc eu lacinia velit, commodo porta nisl. Cras in dui ac felis aliquet pretium. Quisque in accumsan est. Quisque id sem ut mauris maximus congue. Morbi at ligula a lacus accumsan elementum ac id enim. Integer sodales neque quis mi commodo ornare.',
	},
]

export const salesData = [
	{
		id: 0,
		images: [sales1.src, sales2.src, sales1.src],
		title: 'Վարձով բնակարան Երևանում',
		code: 266513,
		price: 523000,
		exclusive: true,
		size: 44,
		floor: 3,
		rooms: 2,
	},
	{
		id: 1,
		images: [sales2.src, sales3.src, sales1.src],
		title: 'Վարձով բնակարան Երևանում',
		code: 266513,
		price: 523000,
		exclusive: true,
		size: 44,
		floor: 3,
		rooms: 2,
	},
	{
		id: 2,
		images: [sales3.src, sales1.src, sales2.src],
		title: 'Վարձով բնակարան Երևանում',
		code: 266513,
		price: 523000,
		exclusive: true,
		size: 44,
		floor: 3,
		rooms: 2,
	},
]

export const footerData = {
	contacts: {
		title: 'ԱԿՑԵՌՆ ՀՈԼԴԻՆԳ',
		contactInfo: [
			{
				icon: geo.src,
				title: 'Հայաստան, 0012 Երևան, Վաղարշ Վաղարշյան փող․, 12 շենք',
			},
			{
				icon: geo.src,
				title: 'info@akcern.am',
			},
			{
				icon: phone.src,
				title: '+374 (10) 277-662',
			},
			{
				icon: phone.src,
				title: '+374 (91) 277-662',
			},
			{
				icon: viber.src,
				title: '+374 (96) 277-662',
			},
			{
				icon: whatsapp.src,
				title: '+374 (96) 277-662',
			},
		],

		socials: [
			{ icon: instagram.src, link: 'https://instagram.com' },
			{ icon: facebook.src, link: 'https://facebook.com' },
			{ icon: youtube.src, link: 'https://youtube.com' },
		],
	},
	sales: {
		title: 'Վաճառք',
		salesTabs: [
			{ id: 0, title: 'Բնակարան', link: '', subTabs: [] },
			{ id: 1, title: 'Տուն', link: '', subTabs: [] },
			{ id: 2, title: 'Առանձնատուն', link: '', subTabs: [] },
			{ id: 3, title: 'Ամառանոց', link: '', subTabs: [] },
			{ id: 4, title: 'Գրասենյակ', link: '', subTabs: [] },
			{ id: 5, title: 'Ռեստորան', link: '', subTabs: [] },
			{ id: 6, title: 'Խանութ ', link: '', subTabs: [] },
			{ id: 7, title: 'Հողատարածք', link: '', subTabs: [] },
			{ id: 8, title: 'Ավտոտեխսպասարկման կետ', link: '', subTabs: [] },
			{ id: 9, title: 'Հյուրանոց', link: '', subTabs: [] },
			{ id: 10, title: 'Վարսավիրանոց', link: '', subTabs: [] },
			{ id: 11, title: 'Այլ', link: '', subTabs: [] },
		],
	},
	rent: {
		title: 'Վարձակալություն',
		rentTabs: [
			{ id: 0, title: 'Բնակարան', link: '', subTabs: [] },
			{ id: 1, title: 'Տուն', link: '', subTabs: [] },
			{ id: 2, title: 'Առանձնատուն', link: '', subTabs: [] },
			{ id: 3, title: 'Ամառանոց', link: '', subTabs: [] },
			{ id: 4, title: 'Գրասենյակ', link: '', subTabs: [] },
			{ id: 5, title: 'Ռեստորան', link: '', subTabs: [] },
			{ id: 6, title: 'Խանութ ', link: '', subTabs: [] },
			{ id: 7, title: 'Հողատարածք', link: '', subTabs: [] },
			{ id: 8, title: 'Ավտոտեխսպասարկման կետ', link: '', subTabs: [] },
			{ id: 9, title: 'Հյուրանոց', link: '', subTabs: [] },
			{ id: 10, title: 'Վարսավիրանոց', link: '', subTabs: [] },
			{ id: 11, title: 'Այլ', link: '', subTabs: [] },
		],
	},
}
