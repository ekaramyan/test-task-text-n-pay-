import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
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
			color: 'rgba(0, 0, 0, 0.85)',
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
			color: 'rgba(0, 0, 0, 0.85)',
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
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
	factor: 3,
})

export default responsiveTheme
