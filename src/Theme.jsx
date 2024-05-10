import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
	},
	components: {},

	palette: {},
	button: {},
	typography: {
		fontFamily: 'Verdana',
		fontSize: 14,

		allVariants: {
			cursor: 'default',
			fontSize: 20,
			fontWeight: 400,
			color: '#000',
			lineHeight: 1.55,
		},
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
	factor: 4,
})

export default responsiveTheme
