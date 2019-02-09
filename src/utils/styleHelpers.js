import { css } from '@emotion/core'

const BREAKPOINTS = [
	['S', 40],
	['M', 52],
	['L', 64],
]

// sample return size val => (min-width: 768px)
export const MATCH_MEDIA = BREAKPOINTS.reduce((acc, bp) => ({
	...acc,
	[bp[0]]: `(min-width: ${bp[1]}em)`,
}), {})

// sample return size val => @media (min-width: 768px)
export const MQ = BREAKPOINTS.reduce((acc, bp) => ({
	...acc,
	[bp[0]]: `@media ${MATCH_MEDIA[bp[0]]}`,
}), {})

export const MAX_WIDTHS = {
	XS: '536px',
	S: '576px',
	L: '960px',
}

export const SPACERS = {
	S: '5px',
	M: '10px',
	L: '15px',
	XL: '20px',
}

// font sizes in comments below are calculated from 16px base font-size
export const FONT_SIZES = {
	H1: '2rem',	// 32px
	H2: '1.68179rem', // ~27px
	H3: '1.41421rem', // ~23px
	H4: '1.12246rem', // ~18px
	H5: '0.8909rem', // ~14px
	H6: '0.7937rem', // ~13px
}

export const COLORS = {
	BLACK: '#000',
	GREEN_DARK: '#323e29',
	GREEN_MEDIUM: '#586d4a',
	BLUE_FOOTER: '#E1E8F0',
	BLUE_LINK: '#337ab7',
	GRAY_PLACEHOLDER: 'gray',
	RED: '#B7242F',
	RED_HOVER: '#d62d39',
	RED_ERROR: '#ff0014',
	WHITE: '#FFF',
}

export const inputBorder = css`
	border-radius: 6px;
	border: 2px solid #a76f25;
`

export const formText = css`
	font-size: ${FONT_SIZES.H4};
	padding: ${SPACERS.M};
	width: 100%;
`

export const sectionContainer = css`
	padding: 20px;

	${MQ.M} {
		padding: 20px 0;
	}
`

export const ERROR_BORDER_STYLE = `2px solid ${COLORS.RED_ERROR}`
export const INPUT_HEIGHT = '40px'
export const INPUT_PADDING = '5px 10px'
export const INPUT_WIDTH = '275px'
export const MAX_SECTION_WIDTH = '800px'
