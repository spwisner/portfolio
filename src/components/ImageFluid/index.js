// external dependencies
import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

// constants
import { MQ } from '../../utils/styleHelpers'

// styled components
const Img = styled(Image)`
	display: ${({ displayXs }) => (displayXs)};
	height: ${({ heightXs }) => (heightXs)};
	margin: ${({ marginXs }) => (marginXs)};
	max-width: ${({ maxWidthXs }) => (maxWidthXs)};
	width: ${({ widthXs }) => (widthXs)};

	${MQ.M} {
		display: ${({ displayXs, displayM }) => (displayM || displayXs)};
		margin: ${({ marginXs, marginM }) => (marginM || marginXs)};
		max-width: ${({ maxWidthXs, maxWidthM }) => (maxWidthM || maxWidthXs)};
	}
`

const ImageFluid = ({
	displayM,
	displayXs,
	fluid,
	heightXs,
	marginXs,
	marginM,
	maxWidthXs,
	maxWidthM,
	widthXs,
}) => (
	<Img
		displayM={displayM}
		displayXs={displayXs}
		fluid={fluid}
		heightXs={heightXs}
		marginM={marginM}
		marginXs={marginXs}
		maxWidthM={maxWidthM}
		maxWidthXs={maxWidthXs}
		widthXs={widthXs}
	/>
)

ImageFluid.defaultProps = {
	displayM: null,
	displayXs: 'block',
	heightXs: 'auto',
	marginXs: '0',
	marginM: null,
	maxWidthXs: '100%',
	maxWidthM: null,
	widthXs: '100%',
}

ImageFluid.propTypes = {
	displayM: string,
	displayXs: string,
	fluid: object.isRequired,
	heightXs: string,
	marginM: string,
	marginXs: string,
	maxWidthM: string,
	maxWidthXs: string,
	widthXs: string,
}

export default ImageFluid
