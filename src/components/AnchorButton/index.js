// external dependencies
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

// constants
import {
	COLORS,
	FONT_SIZES,
	MQ,
} from '../../utils/styleHelpers'

// styled components
const Button = styled.button`
	background: ${COLORS.RED};
	border-radius: 0;
	border: none;
	color: ${COLORS.WHITE};
	font-size: ${FONT_SIZES.H5};
	font-weight: bold;
	height: 40px;
	outline: none;
	text-transform: uppercase;
	width: 150px;

	&:hover {
		background: ${COLORS.RED_HOVER};
		cursor: pointer;
	}
`

const ButtonContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	width: 100%;

	${MQ.M} {
		justify-content: ${({ alignment }) => alignment};
	}
`

class AnchorButton extends Component {
	handleClick = () => {
		document.getElementById('registrationAnchor').scrollIntoView(true)
	}

	render() {
		const {
			alignment,
			anchorText,
		} = this.props

		return (
			<ButtonContainer alignment={alignment}>
				<Button onClick={this.handleClick}>{anchorText}</Button>
			</ButtonContainer>
		)
	}
}

AnchorButton.defaultProps = {
	alignment: 'flex-start',
}

AnchorButton.propTypes = {
	alignment: string,
	anchorText: string.isRequired,
}

export default AnchorButton
