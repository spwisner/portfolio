// external dependencies
import React, { Fragment } from 'react'
import { bool, object, string } from 'prop-types'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

// constants
import { COLORS } from '../../utils/styleHelpers'

// styled components
// https://github.com/gatsbyjs/gatsby/issues/2470
const FormBackgroundImage = styled(Image)`
	bottom: 0;
	height: ${({ backgroundHeight }) => (backgroundHeight)};
	left: 0;
	position: absolute !important; /* !important required to override gatsby image styling */
	top: 0;
	width: ${({ backgroundWidth }) => (backgroundWidth)};
	z-index: -2;

  	// Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
	& > img {
		object-fit: cover !important; 
		object-position: 0% 0% !important;
		font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
	}
`

const FormBackgroundOverlay = styled.div`
	background: ${COLORS.BLACK};
	bottom: 0;
	left: 0;
	height: ${({ backgroundHeight }) => (backgroundHeight)};
	position: absolute !important; /* !important required to override gatsby image styling */
	opacity: ${({ overlayOpacity }) => (overlayOpacity)};
	top: 0;
	width: ${({ backgroundWidth }) => (backgroundWidth)};
	z-index: -1;
`

function BackgroundImage(props) {
	const {
		backgroundHeight,
		backgroundWidth,
		fluid,
		hasOverlay,
		overlayOpacity,
	} = props

	return (
		<Fragment>
			{hasOverlay &&
				<FormBackgroundOverlay
					backgroundHeight={backgroundHeight}
					backgroundWidth={backgroundWidth}
					overlayOpacity={overlayOpacity}
				/>
			}
			<FormBackgroundImage
				backgroundHeight={backgroundHeight}
				backgroundWidth={backgroundWidth}
				fluid={fluid}
			/>
		</Fragment>
	)
}

BackgroundImage.propTypes = {
	backgroundHeight: string,
	backgroundWidth: string,
	fluid: object.isRequired,
	hasOverlay: bool,
	overlayOpacity: string,
}

BackgroundImage.defaultProps = {
	backgroundHeight: 'auto',
	backgroundWidth: '100%',
	hasOverlay: false,
	overlayOpacity: '0.5',
}

export default BackgroundImage
