import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '22px',
	baseLineHeight: 1.5,
	headerFontFamily: ['Raleway', 'sans-serif'],
	bodyFontFamily: ['Roboto Slab', 'sans-serif'],
	scaleRatio: 3,
	googleFonts: [
		{
			name: 'Raleway',
			styles: ['700', '600'],
		},
		{
			name: 'Roboto Slab',
			styles: ['400'],
		},
	],
})

export default typography
