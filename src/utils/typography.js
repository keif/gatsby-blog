import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.7,
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
