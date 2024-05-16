import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const black = 'rgba(0, 0, 0, 0.85)'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
		MuiMobileStepper: {
			root: {
				backgroundColor: 'white',
			},
			dots: {
				backgroundColor: 'blue',
			},
			dot: {
				width: 0,
				height: 0,
			},
			progress: {
				backgroundColor: 'green', // Изменение цвета прогресса
			},
			dotActive: {
				backgroundColor: 'red', // Изменение цвета активной точки
				width: 10, // Изменение размера активной точки
				height: 10,
			},
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					cursor: 'pointer',
				},
				menuTab: {
					fontSize: '14px !important',
					fontWeight: 400,
					color: '#fff',
					lineHeight: '150%',
					padding: 0,
				},
				card__transparent_button: {
					border: '2px solid rgba(255, 255, 255, 1)',
					borderRadius: 100,
					fontFamily: 'Verdana',
					fontSize: 16,
					fontWeight: 700,
					lineHeight: 1.25,
					color: '#fff',
					width: '100%',
				},
				card__services_button: {
					fontFamily: 'Verdana',
					fontSize: 16,
					fontWeight: 400,
					lineHeight: 1.25,
					color: 'rgba(0, 0, 0, 0.45)',
					textTransform: 'none',
					display: 'flex',
					gap: 6,
					'&:after': {
						content: '" "',
						position: 'absolute',
						background: 'rgba(0, 0, 0, 0.45)',
						width: '100%',
						height: 2,
						left: '50%',
						top: 30,
						transform: 'translateX(-50%)',
						transition: 'all .3s',
					},
					'&:hover': {
						color: 'rgba(0, 0, 0, 0.85)',
						background: 'none',
						'&:after': {
							background: 'rgba(255, 153, 51, 1)',
						},
					},
				},
				sales__card_button: {
					fontFamily: 'Verdana',
					color: '#fff',
					fontSize: 14,
					fontWeight: 700,
					background: 'rgba(255, 153, 51, 1)',
					width: 140,
					height: 40,
					padding: '10px 24px 10px 24px',
					borderRadius: 32,
					transition: 'all .3s',
					'&:hover': {
						background: 'rgba(255, 153, 51, 0.8)',
						transform: 'scale(1.05)',
					},
				},
				footer__properties: {
					fontFamily: 'Verdana',
					fontSize: 16,
					fontWeight: 400,
					lineHeight: 1.5,
					color: 'rgba(0, 19, 54, 1)',
					padding: '6px 12px',
					textTransform: 'none',
				},
			},
		},
		MuiMobileStepper: {
			styleOverrides: {
				root: {
					// backgroundColor: 'white',
				},
				dot: {
					width: 6,
					height: 6,
				},
				dots: {
					alignItems: 'center',
					justifyContent: 'center',
				},
				dotActive: {
					width: 10,
					height: 10,
				},
			},
		},
	},

	palette: {},

	typography: {
		fontFamily: 'Verdana',
		fontSize: 14,

		allVariants: {
			fontFamily: 'Verdana',
			cursor: 'default',
			fontSize: 20,
			fontWeight: 400,
			color: '#000',
			lineHeight: 1.55,
		},
		menuTab: {
			fontSize: 14,
			fontWeight: 400,
			color: '#fff',
			lineHeight: '150%',
		},
		headingBlock_header: {
			fontFamily: 'Verdana',
			fontSize: 88,
			fontWeight: 700,
			lineHeight: 1.1,
			color: '#fff',
		},
		headingBlock_subheader: {
			fontFamily: 'Verdana',
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 1.25,
			textAlign: 'center',
			color: '#fff',
		},
		card__transparent_title: {
			fontFamily: 'Verdana',
			fontSize: 32,
			fontWeight: 700,
			lineHeight: 1.25,
			textAlign: 'center',
			color: '#fff',
			textTransform: 'uppercase',
		},
		stats_count: {
			fontFamily: 'Inter',
			fontSize: 64,
			fontWeight: 700,
			lineHeight: 1.25,
			textAlign: 'center',
			color: 'rgba(255, 153, 51, 1)',
		},
		stats_comment: {
			fontFamily: 'Verdana',
			fontSize: 32,
			fontWeight: 400,
			lineHeight: 1.25,
			textAlign: 'center',
			color: 'rgba(0, 0, 0, 0.65)',
		},
		block_header: {
			fontFamily: 'Arial',
			fontSize: 48,
			fontWeight: 700,
			lineHeight: 1.25,
			textAlign: 'center',
			color: black,
			position: 'relative',
			textTransform: 'uppercase',
			'&:before': {
				content: '" "',
				background: 'rgba(255, 153, 51, 1)',
				width: 37,
				height: 10,
				left: -52,
				top: 25,
				position: 'absolute',
			},
		},
		block_subheader: {
			fontFamily: 'Verdana',
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 1.25,
			textAlign: 'center',
			color: 'rgba(0, 0, 0, 0.65)',
		},
		services__card_title: {
			fontFamily: 'Arial',
			fontSize: 28,
			fontWeight: 700,
			lineHeight: 1.25,
			textAlign: 'center',
			color: black,
			position: 'relative',
			textTransform: 'uppercase',
			margin: '20px 0',
			'&:after': {
				content: '" "',
				position: 'absolute',
				background: 'rgba(255, 153, 51, 1)',
				width: 112,
				height: 4,
				left: '50%',
				top: 40,
				transform: 'translateX(-50%)',
				transition: 'all .3s',
			},
		},
		services__card_comment: {
			fontFamily: 'Verdana',
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 1.5,
			textAlign: 'center',
		},
		sales__card_compare: {
			color: black,
			fontFamily: 'Verdana',
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 1.5,
		},
		sales__card_code: {
			color: 'rgba(0, 19, 54, 1)',
			fontFamily: 'Verdana',
			fontSize: 20,
			fontWeight: 400,
			lineHeight: 1.4,
		},
		sales__card_exclusive: {
			padding: '4px 16px 4px 16px',
			background: 'rgba(255, 223, 115, 1)',
			borderRadius: 7,
			fontFamily: 'Arial',
			fontSize: 12,
			fontWeight: 400,
			lineHeight: 1.25,
			textTransform: 'uppercase',
		},
		sales__card_price: {
			fontFamily: 'Verdana',
			fontSize: 32,
			fontWeight: 700,
			lineHeight: 1.25,
			textAlign: 'left',
			color: 'rgba(0, 19, 54, 1)',
		},
		sales__card_currency: {
			fontFamily: 'Verdana',
			fontSize: 24,
			fontWeight: 400,
			lineHeight: 1.5,
			color: black,
		},
		sales__card_title: {
			fontFamily: 'Verdana',
			fontSize: 20,
			fontWeight: 400,
			lineHeight: 1.4,
			color: 'rgba(0, 19, 54, 1)',
		},
		sales__card_properties: {
			fontFamily: 'Verdana',
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 1.4,
			color: 'rgba(0, 0, 0, 0.65)',
		},
		footer__contacts_title: {
			fontFamily: 'Verdana',
			fontSize: 18,
			fontWeight: 400,
			lineHeight: 1.45,
			color: 'rgba(0, 19, 54, 1)',
		},
		footer__properties: {
			fontFamily: 'Verdana',
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 1.5,
			color: 'rgba(0, 19, 54, 1)',
		},
		footer__properties_title: {
			fontFamily: 'Verdana',
			fontSize: 24,
			fontWeight: 400,
			lineHeight: 0.9,
			color: 'rgba(0, 19, 54, 0.65)',
		},
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
	factor: 3,
})

export default responsiveTheme
