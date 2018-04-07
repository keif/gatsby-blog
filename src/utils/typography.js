import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.5,
    headerFontFamily: ['Roboto Slab', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'serif'],
    scaleRatio: 2,
    googleFonts: [
        {
            name: 'Roboto slab',
            styles: [
                '700',
            ],
        },
        {
            name: 'Roboto',
            styles: [
                '400',
                '700'
            ],
        },
    ],
});

export default typography;