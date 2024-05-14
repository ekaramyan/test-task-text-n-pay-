import language from '@/assets/img/language.svg'
import keyIcon from '@/assets/img/keyIcon.svg'
import rentIcon from '@/assets/img/rentIcon.svg'
import sellICon from '@/assets/img/sellICon.svg'

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
